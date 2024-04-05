import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ChangeDetectionStrategy, Component } from '@angular/core';

import { HtmlPipe } from '../../pipes/html.pipe';
import { SectionComponent } from '../../components/section/section.component';

@Component({
  standalone: true,
  selector: 'aa-experience-section',
  templateUrl: './experience.section.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [HtmlPipe, CommonModule, TranslateModule, SectionComponent],
})
export class ExperienceSection {
  length = 3;
}
