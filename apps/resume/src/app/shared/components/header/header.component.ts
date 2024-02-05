import { NgIf, NgStyle } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';

import {
  LogoComponent,
  AsideComponent,
  ContactComponent,
  HobbiesComponent,
  SeparatorComponent,
  InformationComponent,
  SoftwareSkillsComponent,
} from '@resume/components';
import { AnchorService, ContentService } from '@resume/services';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { distinctUntilChanged } from 'rxjs';

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
