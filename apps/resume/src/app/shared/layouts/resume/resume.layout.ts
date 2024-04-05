import { ChangeDetectionStrategy, Component } from '@angular/core';

import {
  BodyComponent,
  LogoComponent,
  HeaderComponent,
  LoaderComponent,
} from '@resume/components';

@Component({
  standalone: true,
  selector: 'aa-resume',
  templateUrl: './resume.layout.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [LogoComponent, BodyComponent, HeaderComponent, LoaderComponent],
})
export class ResumeLayout {}
