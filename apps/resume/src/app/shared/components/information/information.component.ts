import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { AnchorService } from '@resume/services';

import { HelpIconComponent } from '../help-icon/help-icon.component';

@Component({
  standalone: true,
  selector: 'aa-information',
  imports: [CommonModule, HelpIconComponent],
  templateUrl: './information.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InformationComponent {
  readonly anchor = inject(AnchorService);
}
