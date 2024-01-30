import { NgFor } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'aa-hobbies',
  imports: [NgFor, TranslateModule],
  templateUrl: './hobbies.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HobbiesComponent {}
