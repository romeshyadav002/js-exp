export function flattenArray(arr: any[]) {
  // [1, [2, [3, [4]], 5]]
  return arr.reduce((acc, val, index) => {
    console.log({ acc, val, index, arr });
    return acc.concat(Array.isArray(val) ? flattenArray(val) : val);
  }, []);
}
