import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ViewEncapsulation,
  computed,
  inject,
} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { ContentService } from '@resume/services';

import { DomUtil } from './app.util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  readonly cdr = inject(ChangeDetectorRef);
  readonly content = inject(ContentService);
  readonly translator = inject(TranslateService);

  title = 'Achraf Abdessalem - Resume';
  sections = [
    'EDUCATION',
    'SKILLS',
    'EXPERIENCE',
    'PERSONAL_PROJECTS',
    'CONTACT',
  ];

  isAppReady = computed(() => {
    const _isContentLoaded = this.content.isLoaded();
    if (_isContentLoaded) {
      DomUtil.removeClass(document.body, 'm-overflow:hidden');
    } else {
      DomUtil.addClass(document.body, 'm-overflow:hidden');
    }
    return _isContentLoaded;
  });
}
