import { TranslateModule } from '@ngx-translate/core';
import { ChangeDetectionStrategy, Component } from '@angular/core';

import { ContactComponent } from '../../components/contact/contact.component';
import { SectionComponent } from '../../components/section/section.component';
import { SeparatorComponent } from '../../components/separator/separator.component';

@Component({
  standalone: true,
  selector: 'aa-contact-section',
  templateUrl: './contact.section.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    TranslateModule,
    ContactComponent,
    SectionComponent,
    SeparatorComponent,
  ],
})
export class ContactSection {}
