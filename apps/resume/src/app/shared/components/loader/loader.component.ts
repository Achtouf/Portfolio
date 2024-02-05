import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  styles: ``,
  imports: [],
  standalone: true,
  selector: 'aa-loader',
  templateUrl: './loader.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoaderComponent {
  size = input('2rem');
}
