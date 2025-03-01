import cloneDeep from "lodash.clonedeep";

// Pros: Works well for objects and arrays.
// Cons: Loses functions, undefined, Date, RegExp, Map, Set, and other complex types.
export function deepClone1(obj: unknown) {
  return JSON.parse(JSON.stringify(obj));
}

// Pros: Supports complex data types like objects, arrays, Maps, Sets, and more.
// Cons: Not supported in older browsers.
export function deepClone2(obj: unknown) {
  return structuredClone(obj);
}

// Pros: Handles nested structures, Map, Set, and custom objects.
// Cons: Requires an external library.
export function deepClone3(obj: unknown) {
  return cloneDeep(obj);
}

export function deepClone4<T>(obj: T): T {
  if (obj === null || typeof obj !== "object") return obj;

  if (obj instanceof Date) return new Date(obj) as T;
  if (obj instanceof RegExp) return new RegExp(obj) as T;
  if (obj instanceof Map)
    return new Map(
      [...obj.entries()].map(([k, v]) => [deepClone4(k), deepClone4(v)])
    ) as T;
  if (obj instanceof Set)
    return new Set([...obj].map((val) => deepClone4(val))) as T;

  let clone: Record<string, any> = Array.isArray(obj) ? [] : {};
  for (let key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      clone[key] = deepClone4(obj[key]);
    }
  }

  return clone as T;
}
