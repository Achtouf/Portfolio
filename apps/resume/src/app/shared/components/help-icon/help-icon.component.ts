import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'aa-help-icon',
  templateUrl: './help-icon.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HelpIconComponent {
  @Input() width = '3rem';
}
