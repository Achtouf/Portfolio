import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import {
  ChangeDetectionStrategy,
  Component,
  effect,
  inject,
} from '@angular/core';

import {
  SkillsSection,
  EducationSection,
  ExperienceSection,
  PersonalProjectsSection,
  ContactSection,
} from '@resume/sections';

import { ContactComponent } from '../contact/contact.component';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'aa-body',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
    ContactComponent,
    // Sections
    SkillsSection,
    ContactSection,
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
  readonly theme = inject(ThemeService);

  isTranslationInitialized = false;
  sections = [
    'EDUCATION',
    'SKILLS',
    'EXPERIENCE',
    'PERSONAL_PROJECTS',
    'CONTACT',
  ];

  constructor() {
    effect(() => {
      document
        .getElementsByTagName('html')
        .item(0)
        ?.setAttribute('aa-theme', this.theme.theme());
    });
  }

  goToTarget(target: string): void {
    let child = document.getElementById(target);
    if (child && !child.offsetParent) {
      child = document.getElementById(`MIN_${target}`);
    }
    if (child) {
      let _top = 0;
      const _item = document.getElementById('APP_NAVIGATION');
      if (_item) {
        _top = _item.getBoundingClientRect().height;
        window.scrollTo({
          top: child.offsetTop - _top,
          behavior: 'smooth',
        });
      }
    }
  }
}
