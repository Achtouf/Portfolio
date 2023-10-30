import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ChangeDetectionStrategy, Component } from '@angular/core';

import {
  SkillsSection,
  EducationSection,
  ExperienceSection,
  PersonalProjectsSection,
} from '../../sections';

@Component({
  selector: 'aa-body',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    // Sections
    SkillsSection,
    EducationSection,
    ExperienceSection,
    PersonalProjectsSection,
  ],
  styles: [
    `
      button {
        text-decoration: none;
        color: var(--m-tertiary-main) !important;

        &:hover {
          color: var(--m-primary-main) !important;
        }
      }
    `,
  ],
  templateUrl: './body.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BodyComponent {
  isTranslationInitialized = false;
  sections = [
    'EDUCATION',
    'SKILLS',
    'EXPERIENCE',
    'PERSONAL_PROJECTS',
    'CONTACT',
  ];

  goToTarget(target: string): void {
    const child = document.querySelector(`#${target}`);
    if (child) {
      child.scrollIntoView({
        block: 'start',
        behavior: 'smooth',
      });
    }
  }
}
