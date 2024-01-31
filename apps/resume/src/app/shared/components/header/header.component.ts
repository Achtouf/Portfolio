import { NgIf, NgStyle } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import {
  LogoComponent,
  AsideComponent,
  ContactComponent,
  HobbiesComponent,
  InformationComponent,
  SoftwareSkillsComponent,
  SeparatorComponent,
} from '@resume/components';
import { AnchorService, ContentService } from '@resume/services';

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
}
