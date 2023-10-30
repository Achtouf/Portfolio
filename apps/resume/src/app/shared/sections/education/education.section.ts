import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ChangeDetectionStrategy, Component } from '@angular/core';

import { SectionComponent } from '../../components/section/section.component';
import { HelpIconComponent } from '../../components/help-icon/help-icon.component';
import { InformationComponent } from '../../components/information/information.component';

@Component({
  standalone: true,
  selector: 'aa-education-section',
  templateUrl: './education.section.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    TranslateModule,
    SectionComponent,
    HelpIconComponent,
    InformationComponent,
  ],
})
export class EducationSection {
  grades = ['MASTER', 'BACHELOR'];
}
