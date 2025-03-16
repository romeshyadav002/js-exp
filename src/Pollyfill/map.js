// 🔹 8. Array.prototype.map() Polyfill
// Creates a new array by applying a function to each element.

if (!Array.prototype.map) {
  Array.prototype.map = function (callback, thisArg) {
    if (!this)
      throw new TypeError("Array.prototype.map called on null or undefined");
    if (typeof callback !== "function")
      throw new TypeError(callback + " is not a function");

    let result = [];
    for (let i = 0; i < this.length; i++) {
      result.push(callback.call(thisArg, this[i], i, this));
    }
    return result;
  };
}

const numbers = [1, 2, 3];
const doubled = numbers.map((num) => num * 2);
console.log(doubled); // Output: [2, 4, 6]
