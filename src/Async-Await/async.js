// 💡 async function always returns a promise, even if I return a simple string from below
// function, async keyword will wrap it under Promise and then return.
async function getData() {
  return "Namaste JavaScript";
}
const dataPromise = getData();
console.log(dataPromise); // Promise {<fulfilled>: 'Namaste JavaScript'}
//❓How to extract data from above promise? One way is using promi

// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Promise Resolved Value!!");
//   }, 10000);
// });

// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Promise Resolved Value!!");
//   }, 5000);
// });

// async function handlePromise() {
//   console.log("Hello World !!");
//   const val = await p1;
//   console.log("Namaste Javascript");
//   console.log(val);

//   const val2 = await p2;
//   console.log("Namaste Javascript 2");
//   console.log(val2);
// }

// handlePromise();
