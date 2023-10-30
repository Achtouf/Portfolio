import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

export type ThemeLevel =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'success'
  | 'info'
  | 'warning'
  | 'danger'
  | 'help'
  | 'neutral';

export type ThemeExtendedLevel = ThemeLevel | 'surface' | 'background';

@Component({
  selector: 'aa-logo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './logo.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LogoComponent {
  @Input() isArabic = false;
  @Input() level: ThemeExtendedLevel = 'tertiary';
}
