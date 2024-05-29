import { Observable } from 'rxjs';
import { inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRouteSnapshot } from '@angular/router';

import { LoggerUtil } from '@resume/utils';
import { ContentService } from '@resume/services';
import { ResumeLanguage, defaultLanguage } from './app.i18n';

export const LanguageResolver = (
  route: ActivatedRouteSnapshot
): Observable<string> | Promise<string> | string => {
  const _content = inject(ContentService);
  const _translator = inject(TranslateService);

  const _current = _content.language();
  const _language = route.paramMap.get('language') ?? defaultLanguage;

  LoggerUtil.log('[LanguageResolver] langs: ', _translator.langs);

  if (
    _language &&
    Object.values(ResumeLanguage).includes(_language as ResumeLanguage)
  ) {
    if (_language !== _current) {
      _translator.use(_language);
      return _language;
    }
  }

  return _current;
};
