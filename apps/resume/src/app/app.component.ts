import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ViewEncapsulation,
  inject,
} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
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
    this.translator.onLangChange.pipe(takeUntilDestroyed()).subscribe(() => {
      this.cdr.detectChanges();
    });
  }
}
