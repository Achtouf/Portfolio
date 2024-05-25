import { Observable } from 'rxjs';
import { ActivatedRouteSnapshot } from '@angular/router';

import { inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { ResumeLanguage, defaultLanguage } from './app.i18n';

export const LanguageResolver = (
  route: ActivatedRouteSnapshot
): Observable<string> | Promise<string> | string => {
  const _translator = inject(TranslateService);

  let _result: ResumeLanguage = defaultLanguage;
  const _language = route.paramMap.get('language') ?? defaultLanguage;

  if (
    _language &&
    Object.values(ResumeLanguage).includes(_language as ResumeLanguage)
  ) {
    if (_language != _result) {
      _result = _language as ResumeLanguage;
      _translator.use(_result);
    }
  }

  return _result;
};
