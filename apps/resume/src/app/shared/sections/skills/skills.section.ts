import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ChangeDetectionStrategy, Component } from '@angular/core';

import { HtmlPipe } from '../../pipes/html.pipe';
import { SectionComponent } from '../../components/section/section.component';

@Component({
  standalone: true,
  selector: 'aa-skills-section',
  templateUrl: './skills.section.html',
  imports: [CommonModule, TranslateModule, SectionComponent, HtmlPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillsSection {
  skills = ['TECHNICAL_SKILLS', 'TOOLS', 'LANGUAGES'];
}
