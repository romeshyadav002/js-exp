export function deepClone(obj) {
  if (obj === null || typeof obj !== "object") return obj;

  if (obj instanceof Date) return new Date(obj);
  if (obj instanceof RegExp) return new RegExp(obj);
  if (obj instanceof Map)
    return new Map(
      [...obj.entries()].map(([k, v]) => [deepClone(k), deepClone(v)])
    );
  if (obj instanceof Set) return new Set([...obj].map((val) => deepClone(val)));

  let clone = Array.isArray(obj) ? [] : {};
  for (let key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      clone[key] = deepClone(obj[key]);
    }
  }

  return clone;
}

const obj1 = { a: 1, b: { c: 2 } };
const obj2 = deepClone(obj1);
obj2.b.c = 42;
console.log(obj1.b.c);
