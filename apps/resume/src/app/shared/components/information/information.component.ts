import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  HostListener,
  Input,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import { AnchorService } from '../../services/anchor.service';
import { HelpIconComponent } from '../help-icon/help-icon.component';

@Component({
  standalone: true,
  selector: 'aa-information',
  imports: [CommonModule, HelpIconComponent],
  templateUrl: './information.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InformationComponent {
  private _anchor = inject(AnchorService);
  private _cdr = inject(ChangeDetectorRef);

  @Input() anchor?: string;
  @Input({ required: true }) text!: string;

  @HostListener('window:scroll')
  get top(): string {
    if (!this.anchor) return '';
    const target = document.getElementById(this.anchor);
    if (target) {
      return target.offsetTop + 'px';
    }
    return '';
  }

  constructor() {
    this._anchor.onChange.pipe(takeUntilDestroyed()).subscribe(() => {
      this._cdr.detectChanges();
    });
  }
}
