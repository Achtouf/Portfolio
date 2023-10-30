import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  standalone: true,
  selector: 'aa-software-skills',
  imports: [CommonModule, TranslateModule],
  templateUrl: './software-skills.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SoftwareSkillsComponent {}
