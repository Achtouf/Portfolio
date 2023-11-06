import {
  AfterViewChecked,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  HostListener,
  Input,
  OnInit,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnchorService } from '../../services/anchor.service';
import { HelpIconComponent } from '../help-icon/help-icon.component';
import { of } from 'rxjs';
import { ObjectUtil } from '../../utils/object.util';

interface InformationSection {
  [_key: string]: string;
}

interface InformationOffset {
  [_key: string]: number;
}

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

  @Input() content: InformationSection = {};

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
          texts = [...texts, this.content[id]];
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
