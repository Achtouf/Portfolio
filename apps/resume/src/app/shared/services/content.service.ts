import { distinctUntilChanged, merge } from 'rxjs';
import { Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Injectable, OnInit, computed, inject, signal } from '@angular/core';

import {
  ResumeDirection,
  ResumeLanguage,
  defaultDirection,
  defaultLanguage,
} from '@resume/src/app/app.i18n';

@Injectable({ providedIn: 'root' })
export class ContentService implements OnInit {
  readonly title = inject(Title);
  readonly translator = inject(TranslateService);

  language = signal(defaultLanguage);
  direction = signal(defaultDirection);
  isArabic = computed(() => this.language() === ('ar' as ResumeLanguage));

  constructor() {
    merge(this.translator.onLangChange, this.translator.onDefaultLangChange)
      .pipe(takeUntilDestroyed(), distinctUntilChanged())
      .subscribe((_data) => {
        console.log('[onLangChange] language: ', _data);
        this.language.set(_data.lang as ResumeLanguage);
        this._updateDocumentLanguage(this.language());
      });
    this.translator
      .get('GENERAL.DIRECTION')
      .pipe(takeUntilDestroyed(), distinctUntilChanged())
      .subscribe((_data) => {
        console.log('[onLangChange] direction: ', _data);
        this.direction.set(_data as ResumeDirection);
        this._updateDocumentDirection(this.direction());
      });
  }

  ngOnInit(): void {}

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
