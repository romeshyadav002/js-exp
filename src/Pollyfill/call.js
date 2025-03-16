// 🔹 2. call() Polyfill
// Function.prototype.call() is used to invoke a function with a specified this value and arguments.

// if (!Function.prototype.call) {
Function.prototype.myCall = function (context, ...args) {
  context = context || globalThis;
  const uniqueKey = Symbol(); // Unique key to avoid property conflict
  console.log({ uniqueKey });
  context[uniqueKey] = this;
  const result = context[uniqueKey](...args);
  delete context[uniqueKey]; // Clean up
  return result;
};
// }

function sayHello() {
  console.log("Hello, " + this.name);
}
const person = { name: "Bob" };
sayHello.myCall(person); // Output: "Hello, Bob"
