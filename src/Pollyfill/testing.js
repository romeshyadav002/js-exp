function deepClone(obj) {
  if (obj == null || typeof obj != "object") return obj;
  if (obj instanceof RegExp) return new RegExp(obj);
  if (obj instanceof Date) return new Date(obj);

  let clone = Array.isArray(obj) ? [] : {};

  for (let key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      clone[key] = deepClone[obj[key]];
    }
  }
  return clone;
}

function deepOmit(obj, keys) {
  if (obj == null || typeof obj != "object") return obj;

  if (Array.isArray(obj)) {
    let changed = false;
    let newArr = obj.map((item) => {
      const newItem = deepOmit(item, keys);
      if (newItem != item) changed = true;
      return newItem;
    });
    return changed ? newArr : arr;
  }

  let changed = false;
  let res = {};
  for (const [key, value] of Object.entries(obj)) {
    if (keys.includes(key)) {
      continue;
    } else {
      const newValue = deepOmit(value, keys);
      if (newValue != value) changed = true;
      res[key] = newValue;
    }
  }
  return changed ? res : obj;
}

function deepEqual(a, b) {
  if (a === b) return true;
  if (a === null || b === null) return false;
  if (typeof a !== typeof b) return false;

  if (typeof a === "object") {
    if (Array.isArray(a)) {
      if (!Array.isArray(b) || a.length !== b.length) return false;
      for (let i = 0; i < a.length; i++) {
        if (!deepEqual(a[i], b[i])) return false;
      }
      return true;
    }

    const keysA = Object.keys(a);
    const keysB = Object.keys(b);
    if (keysA.length !== keysB.length) return false;
    for (let key of keysA) {
      if (!b.hasOwnProperty(key) || !deepEqual(a[key], b[key])) return false;
    }
    return true;
  }

  return false;
}

function falttenArr(arr) {
  return arr.reduce((acc, curr) => {
    return acc.concat(Array.isArray(curr) ? falttenArr(curr) : curr);
  }, []);
}

function helper(obj, parentKey, result) {
  if (obj === null || typeof obj !== "object") return obj;

  for (let key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
      const newKey = parentKey ? `${parentKey}.${key}` : key;
      if (
        typeof obj[key] === "object" &&
        !Array.isArray(obj) &&
        obj[key] != null
      ) {
        helper(obj[key], newKey, result);
      } else {
        result[newKey] = obj[key];
      }
    }
  }
}
function flattenObj(obj) {
  const result = {};
  helper(obj, "", result);
  return result;
}
