// apply() Polyfill
// Function.prototype.apply() is similar to call(), but it takes an array of arguments.

if (!Function.prototype.apply) {
  Function.prototype.apply = function (context, args) {
    context = context || globalThis;
    const uniqueKey = Symbol();
    context[uniqueKey] = this;
    const result = context[uniqueKey](...args);
    delete context[uniqueKey];
    return result;
  };
}

function introduce(age, city) {
  console.log(`I am ${this.name}, ${age} years old from ${city}.`);
}
const user = { name: "Charlie" };
introduce.apply(user, [25, "New York"]);
// Output: "I am Charlie, 25 years old from New York."
