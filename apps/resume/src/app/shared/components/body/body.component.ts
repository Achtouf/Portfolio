import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { ChangeDetectionStrategy, Component } from '@angular/core';

import {
  SkillsSection,
  EducationSection,
  ExperienceSection,
  PersonalProjectsSection,
} from '@resume/sections';

@Component({
  selector: 'aa-body',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
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
    const child = document.getElementById(target);
    if (child) {
      let _top = 0;
      const _nav = document.getElementById('APP_NAVIGATION');
      if (_nav) {
        _top = _nav.getBoundingClientRect().height;
      }
      window.scrollTo({
        top: child.offsetTop - _top,
        behavior: 'smooth',
      });
    }
  }
}
