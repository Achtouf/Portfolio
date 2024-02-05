import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, input } from '@angular/core';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'aa-help-icon',
  templateUrl: './help-icon.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HelpIconComponent {
  width = input('3rem');
  level = input('primary');
}
