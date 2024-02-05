import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { distinctUntilChanged } from 'rxjs';
import { NgIf, NgStyle } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

import { AnchorService, ContentService } from '@resume/services';

import { LogoComponent } from '../logo/logo.component';
import { AsideComponent } from '../aside/aside.component';
import { ContactComponent } from '../contact/contact.component';
import { HobbiesComponent } from '../hobbies/hobbies.component';
import { SeparatorComponent } from '../separator/separator.component';
import { InformationComponent } from '../information/information.component';
import { SoftwareSkillsComponent } from '../software-skills/software-skills.component';

@Component({
  standalone: true,
  selector: 'aa-header',
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    NgIf,
    NgStyle,
    TranslateModule,
    LogoComponent,
    AsideComponent,
    ContactComponent,
    HobbiesComponent,
    SeparatorComponent,
    InformationComponent,
    SoftwareSkillsComponent,
  ],
})
export class HeaderComponent {
  readonly anchor = inject(AnchorService);
  readonly content = inject(ContentService);
  readonly translator = inject(TranslateService);

  hasNationality = signal(false);
  nationalityKey = 'GENERAL.NATIONALITY';

  constructor() {
    this.translator
      .get(this.nationalityKey)
      .pipe(takeUntilDestroyed(), distinctUntilChanged())
      .subscribe((_value) => {
        if (_value !== this.nationalityKey) {
          this.hasNationality.set(true);
        }
      });
  }
}
