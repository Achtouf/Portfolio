import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  HostListener,
  Input,
  OnInit,
  inject,
} from '@angular/core';
import { NgClass, NgStyle } from '@angular/common';

@Component({
  standalone: true,
  selector: 'aa-aside',
  imports: [NgClass, NgStyle],
  templateUrl: './aside.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AsideComponent implements OnInit {
  private _visible = false;
  private _cdr = inject(ChangeDetectorRef);

  @Input() anchor?: string;

  get visible(): boolean {
    return this._visible;
  }

  ngOnInit(): void {
    this._updateVisibility();
  }

  @HostListener('document:scroll')
  private _updateVisibility(): void {
    if (this.anchor) {
      const target = document.getElementById(this.anchor);
      if (target) {
        const begin = target.offsetTop;
        const end = begin + target.offsetHeight;
        this._visible = window.scrollY >= begin && window.scrollY <= end;
        if (this.visible) {
          console.log(`[_updateVisibility][${this.anchor}]: `, this.visible);
        }
        this._cdr.markForCheck();
      }
    } else {
      if (!this.visible) {
        this._visible = true;
        this._cdr.markForCheck();
      }
    }
  }
}
