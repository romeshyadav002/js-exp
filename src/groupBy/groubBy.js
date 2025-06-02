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

Array.prototype.myGroupBy = function (fn) {
  if (typeof fn !== "function") {
    throw new TypeError("Invalid params");
  }

  return this.reduce((acc, item, index, array) => {
    const key = fn(item, index, array);
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(item);
    return acc;
  }, {});
};
