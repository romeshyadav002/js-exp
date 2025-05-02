function groupBy(arr, key) {
  const map = {};
  for (const obj of arr) {
    const groupKey = obj[key];
    if (map.hasOwnProperty(groupKey)) {
      map[groupKey].push(obj);
    } else {
      map[groupKey] = [obj];
    }
  }
  return map;
}

const user = [
  { name: "romeo", age: 24 },
  { name: "yadav", age: 26 },
  { name: "lokesh", age: 24 },
];

console.log(groupBy(user, "age"));
