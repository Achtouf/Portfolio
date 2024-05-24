import {
  TranslateModule,
  TranslateLoader,
  MissingTranslationHandler,
} from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import {
  CommonModule,
  HashLocationStrategy,
  LocationStrategy,
} from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { HtmlPipe } from '@resume/pipes';
import { AnchorService } from '@resume/services';
import { HelpIconComponent } from '@resume/components';

import {
  defaultLanguage,
  ResumeTranslateLoader,
  ResumeMissingTranslationHandler,
} from './app.i18n';
import { AppComponent } from './app.component';
import { ResumeLayout } from './shared/layouts';
import { AppRoutingModule } from './app-routing.module';
import { withHashLocation } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    // Layouts
    ResumeLayout,
    // Components
    HelpIconComponent,
    // Translate
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
    }),
  ],
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  providers: [
    HtmlPipe,
    AnchorService,
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy,
    },
  ],
})
export class AppModule {}
