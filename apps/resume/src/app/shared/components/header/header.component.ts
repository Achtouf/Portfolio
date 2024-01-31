import { NgStyle } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ChangeDetectionStrategy, Component } from '@angular/core';

import {
  LogoComponent,
  AsideComponent,
  ContactComponent,
  HobbiesComponent,
  InformationComponent,
  SoftwareSkillsComponent,
} from '@resume/components';

@Component({
  standalone: true,
  selector: 'aa-header',
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    NgStyle,
    TranslateModule,
    LogoComponent,
    AsideComponent,
    ContactComponent,
    HobbiesComponent,
    InformationComponent,
    SoftwareSkillsComponent,
  ],
})
export class HeaderComponent {}
