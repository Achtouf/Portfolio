import {
  ChangeDetectorRef,
  Component,
  ViewEncapsulation,
  inject,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  readonly cdr = inject(ChangeDetectorRef);
  readonly translator = inject(TranslateService);

  title = 'Achraf Abdessalem - Resume';
  sections = [
    'EDUCATION',
    'SKILLS',
    'EXPERIENCE',
    'PERSONAL_PROJECTS',
    'CONTACT',
  ];

  constructor() {
    this.translator.onTranslationChange
      .pipe(takeUntilDestroyed())
      .subscribe(() => {
        this.cdr.markForCheck();
      });
  }

  goToTarget(target: string): void {
    const child = document.querySelector(`#${target}`);
    if (child) {
      child.scrollIntoView({
        block: 'end',
        behavior: 'smooth',
      });
    }
  }
}
