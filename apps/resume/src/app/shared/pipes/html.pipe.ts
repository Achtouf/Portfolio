import { DomSanitizer } from '@angular/platform-browser';
import { Pipe, PipeTransform, SecurityContext, inject } from '@angular/core';

@Pipe({
  name: 'html',
  standalone: true,
})
export class HtmlPipe implements PipeTransform {
  private _sanitizer = inject(DomSanitizer);

  transform(value: string): string | null {
    const wrapper = `<span class="aa-paragraph">
      ${value}
    </span>`;
    return this._sanitizer.sanitize(SecurityContext.HTML, wrapper);
  }
}
