const p = new Promise((resolve, reject) => {
  resolve("Promise resolved value!!");
});
async function getData() {
  return p;
}
// In above case, since we are already returning a promise async function would simply
// return that instead of wrapping with a new Promise.
const dataPromise2 = getData();
console.log(dataPromise2); // Promise {<fulfilled>: 'Promise resolved value!!'}
dataPromise2.then((res) => console.log(res)); // Promise resolved value!!
