import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

export interface AnchorDetails {
  anchor: string;
  target: HTMLElement;
}

@Injectable()
export class AnchorService {
  readonly onChange = new Subject();

  update(): void {
    this.onChange.next(null);
  }
}
