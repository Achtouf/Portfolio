import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ChangeDetectionStrategy, Component } from '@angular/core';

import { SectionComponent } from '../../components/section/section.component';

@Component({
  standalone: true,
  selector: 'aa-personal-projects-section',
  templateUrl: './personal-projects.section.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, SectionComponent, TranslateModule],
})
export class PersonalProjectsSection {}
