import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { AsideComponent } from '../aside/aside.component';
import { ContentComponent } from '../content/content.component';
import { SeparatorComponent } from '../separator/separator.component';

@Component({
  selector: 'aa-section',
  standalone: true,
  templateUrl: './section.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, ContentComponent, AsideComponent, SeparatorComponent],
})
export class SectionComponent {
  @Input() id = '';
  @Input() isLast = false;
}
