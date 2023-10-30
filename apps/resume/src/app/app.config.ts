import {
  MissingTranslationHandler,
  TranslateLoader,
  TranslateModule,
} from '@ngx-translate/core';
import { provideRouter } from '@angular/router';
import { ApplicationConfig, importProvidersFrom } from '@angular/core';

import {
  defaultLanguage,
  ResumeMissingTranslationHandler,
  ResumeTranslateLoader,
} from './app.i18n';
import { routes } from './app.routes';

import { AnchorService } from './shared/services/anchor.service';

export const appConfig: ApplicationConfig = {
  providers: [
    AnchorService,
    provideRouter(routes),
    importProvidersFrom(
      TranslateModule.forRoot({
        defaultLanguage,
        loader: {
          provide: TranslateLoader,
          useClass: ResumeTranslateLoader,
        },
        missingTranslationHandler: {
          provide: MissingTranslationHandler,
          useClass: ResumeMissingTranslationHandler,
        },
      })
    ),
  ],
};
