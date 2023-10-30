import {
  MissingTranslationHandler,
  MissingTranslationHandlerParams,
  TranslateLoader,
} from '@ngx-translate/core';
import { from, Observable } from 'rxjs';

export enum ResumeLanguages {
  frFR = 'fr-FR',
  // enUS = 'en-US',
  enGB = 'en-GB',
}

export const defaultLanguage = ResumeLanguages.enGB;

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
