export function flattenArray(arr: any[]) {
  // [1, [2, [3, [4]], 5]]
  return arr.reduce((acc, val, index) => {
    console.log({ acc, val, index, arr });
    return acc.concat(Array.isArray(val) ? flattenArray(val) : val);
  }, []);
}

function helper(obj, parentKey, result) {
  for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
      const newKey = parentKey ? `${parentKey}.${key}` : key;
      if (
        typeof obj[key] === "object" &&
        obj[key] !== null &&
        !Array.isArray(obj[key])
      ) {
        helper(obj[key], newKey, result);
      } else {
        result[newKey] = obj[key];
      }
    }
  }
}
export function flattenObject(obj: any) {
  // Your implementation
  const result = {};
  helper(obj, "", result);
  return result;
}
