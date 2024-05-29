import { Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { distinctUntilChanged, merge, take } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Injectable, computed, inject, signal } from '@angular/core';

import {
  ResumeDirection,
  ResumeLanguage,
  defaultDirection,
  defaultLanguage,
} from '@resume/src/app/app.i18n';
import { LoggerUtil } from '@resume/utils';

@Injectable({ providedIn: 'root' })
export class ContentService {
  readonly title = inject(Title);
  readonly translator = inject(TranslateService);

  isLoaded = signal(false);
  language = signal(defaultLanguage);
  direction = signal(defaultDirection);
  isArabic = computed(() => this.language() === ('ar' as ResumeLanguage));

  constructor() {
    merge(this.translator.onLangChange, this.translator.onDefaultLangChange)
      .pipe(takeUntilDestroyed(), distinctUntilChanged())
      .subscribe((_data) => {
        LoggerUtil.log('[onLangChange] language: ', _data);
        this.isLoaded.set(true);
        this.language.set(_data.lang as ResumeLanguage);
        this._updateDocumentLanguage(this.language());
        this._updateDirection();
      });
  }

  private _updateDirection(): void {
    this.translator
      .get('GENERAL.DIRECTION')
      .pipe(take(1))
      .subscribe((_data) => {
        LoggerUtil.log('[onLangChange] direction: ', _data);
        this.direction.set(_data as ResumeDirection);
        this._updateDocumentDirection(this.direction());
      });
  }

  private _updateDocumentLanguage(_language: string): void {
    const _html = document.querySelector('html');
    if (_html) {
      _html.lang = _language;
    }
  }

  private _updateDocumentDirection(_direction: string): void {
    const _html = document.querySelector('html');
    if (_html) {
      _html.dir = _direction;
    }
  }
}
