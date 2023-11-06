import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ChangeDetectorRef, Component, ViewEncapsulation, inject } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

import { BodyComponent } from './shared/components/body/body.component';
import { LogoComponent } from './shared/components/logo/logo.component';
import { HeaderComponent } from './shared/components/header/header.component';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
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
  private _cdr = inject(ChangeDetectorRef);
  private _translator = inject(TranslateService);

  title = 'Achraf Abdessalem - Resume';
  sections = [
    'EDUCATION',
    'SKILLS',
    'EXPERIENCE',
    'PERSONAL_PROJECTS',
    'CONTACT',
  ];

  constructor() {
    this._translator.onTranslationChange
      .pipe(takeUntilDestroyed())
      .subscribe(() => {
        this._cdr.markForCheck();
      });
  }

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
