import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ChangeDetectionStrategy, Component } from '@angular/core';

import { IdUtil } from '../../utils/id.util';
import { SectionComponent } from '../../components/section/section.component';

@Component({
  standalone: true,
  selector: 'aa-experience-section',
  templateUrl: './experience.section.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, SectionComponent, TranslateModule],
})
export class ExperienceSection {
  length = 3;
  util = IdUtil;
}
