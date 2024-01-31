import { NgClass, NgStyle } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'aa-aside',
  imports: [NgClass, NgStyle],
  templateUrl: './aside.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AsideComponent {}
