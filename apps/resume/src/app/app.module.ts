import {
  TranslateModule,
  TranslateLoader,
  MissingTranslationHandler,
} from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { HtmlPipe } from '@resume/pipes';
import { AnchorService } from '@resume/services';

import {
  defaultLanguage,
  ResumeTranslateLoader,
  ResumeMissingTranslationHandler,
} from './app.i18n';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {
  BodyComponent,
  HeaderComponent,
  LogoComponent,
} from '@resume/components';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    // Components
    LogoComponent,
    BodyComponent,
    HeaderComponent,
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
  providers: [HtmlPipe, AnchorService],
})
export class AppModule {}
