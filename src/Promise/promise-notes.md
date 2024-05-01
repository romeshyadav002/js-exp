. What are Promises?
Promises are objects which are used to perform asynchronous operations. They are just like placeholders to store a future value that will be returned after some time. They contain two properties: PromiseState and PromiseResult.

A Promise is an object representing the eventual completion or failure of an asynchronous operation.

Before promise we used to depend on callback functions which have two disadvantages 
1.) Callback Hell (Pyramid of doom) 
2.) Inversion of control
1) Inversion of control is overcome by using promise
promise is object represent the eventual completion of asynchonous operation
a)A promise has 3 states: pending | fulfilled | rejected.
b) As soon as promise is fulfilled/rejected => It updates the empty object which is assigned undefined in pending state.
c) A promise resolves only once and it is immutable in nature. 
d) Using .then() we can attached the cb(callback) function.
2) - To avoid callback hell (Pyramid of doom) => We use promise chaining. This way our code expands vertically instead of horizontally. Chaining is done using '.then()'
- A very common mistake that developers do is not returning a value during chaining of promises. Always remember to return a value. This returned value will be used by the next .then()