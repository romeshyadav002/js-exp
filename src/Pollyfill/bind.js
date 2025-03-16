// 1. bind() Polyfill
// Function.prototype.bind() allows you to create a new function with this bound to a specific object.
if (!Function.prototype.bind) {
  Function.prototype.bind = function (context, ...args) {
    if (typeof this !== "function") {
      throw new TypeError("Bind must be called on a function");
    }
    const fn = this;
    return function (...newArgs) {
      return fn.apply(context, [...args, ...newArgs]);
    };
  };
}
const obj = { name: "Alice" };
function greet(greeting) {
  console.log(greeting + ", " + this.name);
}
const boundGreet = greet.bind(obj, "Hello");
boundGreet(); // Output: "Hello, Alice"
