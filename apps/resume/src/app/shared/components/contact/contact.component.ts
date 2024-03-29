import { NgFor, NgIf } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'aa-contact',
  templateUrl: './contact.component.html',
  imports: [NgIf, NgFor, TranslateModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactComponent {
  prefix = input('');
}
