import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

import { LogoComponent } from '../logo/logo.component';
import { ContactComponent } from '../contact/contact.component';
import { HobbiesComponent } from '../hobbies/hobbies.component';
import { InformationComponent } from '../information/information.component';
import { SoftwareSkillsComponent } from '../software-skills/software-skills.component';
import { AsideComponent } from '../aside/aside.component';

interface InformationSection {
  ANCHOR: string;
  DESCRIPTION: string;
}

interface InformationSet {
  [_: string]: string;
}

@Component({
  standalone: true,
  selector: 'aa-header',
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    TranslateModule,
    LogoComponent,
    AsideComponent,
    ContactComponent,
    HobbiesComponent,
    InformationComponent,
    SoftwareSkillsComponent,
  ],
})
export class HeaderComponent {
  infos: InformationSet = {};

  private _cdr = inject(ChangeDetectorRef);
  private _translator = inject(TranslateService);

  constructor() {
    this._translator
      .get('INFORMATION')
      .pipe(takeUntilDestroyed())
      .subscribe((data: InformationSection[]) => {
        this.infos = data.reduce((result, item) => {
          return {
            ...result,
            [item.ANCHOR]: item.DESCRIPTION,
          };
        }, {});
        this._cdr.markForCheck();
      });
  }
}
