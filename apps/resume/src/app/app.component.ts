import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { BodyComponent } from './shared/components/body/body.component';
import { LogoComponent } from './shared/components/logo/logo.component';
import { HeaderComponent } from './shared/components/header/header.component';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [
    CommonModule,
    RouterOutlet,
    TranslateModule,
    // Components
    LogoComponent,
    BodyComponent,
    HeaderComponent,
  ],
})
export class AppComponent {
  title = 'Achraf Abdessalem - Resume';
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
