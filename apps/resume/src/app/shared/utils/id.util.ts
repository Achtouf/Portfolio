export class IdUtil {
  static toId(name: string): string {
    return name.replace(/ /g, '_').toUpperCase();
  }
}
