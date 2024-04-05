import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ResumeLayout } from './shared/layouts';
import { LanguageResolver } from './app.resolver';

const routes: Routes = [
  {
    path: '',
    component: ResumeLayout,
  },
  {
    path: ':language',
    component: ResumeLayout,
    resolve: {
      language: LanguageResolver,
    },
  },
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}
