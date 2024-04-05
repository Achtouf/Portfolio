import { isEqual } from 'lodash';
import { TranslateService } from '@ngx-translate/core';
import { Injectable, inject, signal } from '@angular/core';
import { fromEvent, distinctUntilChanged, merge } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import {
  InformationOffset,
  InformationSection,
  InformationSet,
} from '@resume/interfaces';
import { ObjectUtil } from '@resume/utils';
import { environment } from '@resume/env/environment';

export interface AnchorDetails {
  anchor: string;
  target: HTMLElement;
}

@Injectable({ providedIn: 'root' })
export class AnchorService {
  readonly translator = inject(TranslateService);

  private _offset: InformationOffset = {};

  infos = signal<InformationSet>({});
  information = signal<string[]>([]);

  constructor() {
    this.getOffsets();
    this.getInformation();

    merge(this.translator.onLangChange, this.translator.onDefaultLangChange)
      .pipe(takeUntilDestroyed(), distinctUntilChanged())
      .subscribe(() => this.getInformation());

    fromEvent(document, 'scroll')
      .pipe(takeUntilDestroyed(), distinctUntilChanged())
      .subscribe(() => {
        this._updateText();
      });
  }

  getOffsets(): void {
    this._offset = this._calculateOffset();
  }

  getInformation(): void {
    const data = this.translator.instant('INFORMATION');
    if (!environment.production) {
      console.log('[AnchorService] data: ', data);
    }
    let _infos: InformationSet = {};
    data.forEach((_item: InformationSection) => {
      const _anchors = _item.ANCHORS.split(',').map((_anchor) =>
        _anchor.trim()
      );
      _infos = {
        ..._infos,
        ..._anchors
          .map((_anchor) => {
            const _value = _item.DESCRIPTION.trim();
            const _descriptions: string[] = [];
            const _found = _infos[_anchor];
            if (_found) {
              _descriptions.push(..._found);
            }
            if (!_descriptions.includes(_value)) {
              _descriptions.push(_value);
            }
            return { [_anchor]: _descriptions } as InformationSet;
          })
          .reduce(
            (_result, _item) => ({ ..._result, ..._item }),
            {} as InformationSet
          ),
      };
    });
    this.infos.set(_infos);
  }

  updateInformation(_information: string[]): void {
    if (!isEqual(_information, this.information())) {
      this.information.set(_information);
    }
  }

  private _updateText(): void {
    const offsets = this._calculateOffset();
    const haveChanged = this._didOffsetsChange(offsets);

    if (haveChanged) {
      this._offset = offsets;
    }

    let texts: string[] = [];
    for (const id in this._offset) {
      const target = document.getElementById(id);
      if (target) {
        const begin = this._offset[id];
        const end = begin + target.offsetHeight;
        const visible = window.scrollY >= begin && window.scrollY <= end;
        if (visible) {
          texts = [...texts, ...this.infos()[id]];
        }
      }
    }
    const _texts = Array.from(new Set(texts));
    this.updateInformation(_texts);
  }

  private _didOffsetsChange(offsets: InformationOffset): boolean {
    const changes = ObjectUtil.changes(offsets, this._offset);
    return !!changes;
  }

  private _calculateOffset(): InformationOffset {
    const _offset: InformationOffset = {};

    for (const id in this.infos()) {
      const target = document.getElementById(id);
      if (target) {
        _offset[id] = target.offsetTop;
      }
    }

    return _offset;
  }
}
