/* eslint-disable @typescript-eslint/no-explicit-any */

export class DomUtil {
  public static hasClass(element: any, className: string): boolean {
    if (element && className) {
      if (element.classList) return element.classList.contains(className);
      else
        return new RegExp('(^| )' + className + '( |$)', 'gi').test(
          element.className
        );
    }

    return false;
  }

  static addClass(el: HTMLElement, _klass: string): void {
    if (!this.hasClass(el, _klass)) {
      if (el.classList) {
        el.classList.add(_klass);
      } else {
        el.className += ' ' + _klass;
      }
    }
  }

  static addMultipleClasses(el: HTMLElement, _klass: string): void {
    const classes = _klass.split(' ');
    classes.forEach((c) => {
      this.addClass(el, c);
    });
  }

  static removeClass(el: HTMLElement, _klass: string): void {
    if (this.hasClass(el, _klass)) {
      if (el.classList) {
        el.classList.remove(_klass);
      } else {
        el.className = el.className.replace(
          new RegExp('(^|\\b)' + _klass.split(' ').join('|') + '(\\b|$)', 'gi'),
          ' '
        );
      }
    }
  }

  static removeMultipleClasses(el: HTMLElement, _klass: string): void {
    const classes = _klass.split(' ');
    classes.forEach((c) => {
      this.removeClass(el, c);
    });
  }

  static toggleClass(el: HTMLElement, _klass: string): void {
    if (this.hasClass(el, _klass)) {
      return this.removeClass(el, _klass);
    } else {
      return this.addClass(el, _klass);
    }
  }
}
