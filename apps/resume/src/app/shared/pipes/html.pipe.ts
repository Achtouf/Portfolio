import { Pipe, PipeTransform, inject } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'html',
  standalone: true,
})
export class HtmlPipe implements PipeTransform {
  private _sanitizer = inject(DomSanitizer);

  transform(value: string): SafeHtml {
    const wrapper = `<span class="aa-paragraph">
      ${value}
    </span>`;
    return this._sanitizer.bypassSecurityTrustHtml(wrapper);
  }
}
