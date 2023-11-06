import * as _ from 'lodash';

type NullOrUndefined = undefined | null;

export class ObjectUtil {
  static changes<T>(after: any, before: any): T | null {
    const result = ObjectUtil.difference(after, before);
    if (ObjectUtil.isNullOrUndefined(result)) return null;
    if (Object.keys(result).length <= 0) return null;
    return result;
  }

  static difference(next: any, base: any): any {
    return _.transform(
      next,
      (result: { [x: string]: any }, value: any, key: string | number) => {
        if (!_.isEqual(value, base[key])) {
          result[key] =
            _.isObject(value) && _.isObject(base[key])
              ? ObjectUtil.difference(value, base[key])
              : value;
        }
      }
    );
  }

  static isNull(object: unknown): object is null {
    return object === null;
  }

  static isUndefined(object: unknown): object is undefined {
    return object === undefined;
  }

  static isNullOrUndefined(object: unknown): object is NullOrUndefined {
    return ObjectUtil.isNull(object) || ObjectUtil.isUndefined(object);
  }
}
