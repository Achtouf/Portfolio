import { environment } from '@resume/env/environment';

export class LoggerUtil {
  static log(...data: unknown[]): void {
    if (!environment.production) {
      console.log(data);
    }
  }
  static error(...data: unknown[]): void {
    if (!environment.production) {
      console.error(data);
    }
  }
}
