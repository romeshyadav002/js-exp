// 🔹 9. Array.prototype.filter() Polyfill
// Filters elements based on a condition.

if (!Array.prototype.filter) {
  Array.prototype.filter = function (callback, thisArg) {
    if (!this)
      throw new TypeError("Array.prototype.filter called on null or undefined");
    if (typeof callback !== "function")
      throw new TypeError(callback + " is not a function");

    let result = [];
    for (let i = 0; i < this.length; i++) {
      if (callback.call(thisArg, this[i], i, this)) {
        result.push(this[i]);
      }
    }
    return result;
  };
}

const numbers = [1, 2, 3, 4, 5];
const evens = numbers.filter((num) => num % 2 === 0);
console.log(evens); // Output: [2, 4]
