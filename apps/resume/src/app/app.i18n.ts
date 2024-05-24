import {
  MissingTranslationHandler,
  MissingTranslationHandlerParams,
  TranslateLoader,
} from '@ngx-translate/core';
import { from, Observable } from 'rxjs';

export enum ResumeDirection {
  rtl = 'rtl',
  ltr = 'ltr',
}

export enum ResumeLanguage {
  // France
  enCH = 'en-CH',
  fr = 'fr',
  en = 'en',
}

export const defaultLanguage = ResumeLanguage.en;
export const defaultDirection = ResumeDirection.ltr;

export class ResumeTranslateLoader implements TranslateLoader {
  getTranslation(lang: string = defaultLanguage): Observable<unknown> {
    return from(import(`apps/resume/src/assets/i18n/${lang}.json`));
  }
}

export class ResumeMissingTranslationHandler
  implements MissingTranslationHandler
{
  handle(params: MissingTranslationHandlerParams) {
    // this._logger.error(`Missing translation for key =(${params.key})`);
    return params.key;
  }
}
