import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  HostListener,
  Input,
  OnInit,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';

import { ObjectUtil } from '@resume/utils';
import { AnchorService } from '@resume/services';
import { HelpIconComponent } from '@resume/components';
import { InformationSet, InformationOffset } from '@resume/interfaces';

@Component({
  standalone: true,
  selector: 'aa-information',
  imports: [CommonModule, HelpIconComponent],
  templateUrl: './information.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InformationComponent implements OnInit {
  private _anchor = inject(AnchorService);
  private _cdr = inject(ChangeDetectorRef);

  @Input() content: InformationSet = {};

  private _texts: string[] = [];
  private _offset: InformationOffset = {};

  get texts(): string[] {
    return this._texts;
  }

  ngOnInit(): void {
    this._offset = this._getOffsets();
  }

  @HostListener('document:scroll')
  private _updateText(): void {
    const offsets = this._getOffsets();
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
          texts = [...texts, ...this.content[id]];
        }
      }
    }
    this._texts = texts;
    this._cdr.markForCheck();
  }

  private _didOffsetsChange(offsets: InformationOffset): boolean {
    const changes = ObjectUtil.changes(offsets, this._offset);
    return !!changes;
  }

  private _getOffsets(): InformationOffset {
    const _offset: InformationOffset = {};

    for (const id in this.content) {
      const target = document.getElementById(id);
      if (target) {
        _offset[id] = target.offsetTop;
      }
    }
    return _offset;
  }
}
