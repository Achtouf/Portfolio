import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ViewEncapsulation,
  computed,
  inject,
} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { DomUtil } from './app.util';
import { ContentService } from '@resume/services';

@Component({
  selector: 'aa-root',
  templateUrl: './app.component.html',
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
