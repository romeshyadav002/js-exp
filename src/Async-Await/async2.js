const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise resolved value!!");
  }, 3000);
});
// Let's now compare with some modification:
// 📌 Promise.then/.catch way
function getData() {
  // JS engine will not wait for promise to be resolved
  p.then((res) => console.log(res));
  console.log("Hello There! in get data");
}
getData();
// First `Hello There!` would be printed and then after 3 secs 'Promise resolved
// value!!' will be printed.
// Above happened as Javascript wait for none, so it will register this promise and take
// this callback function and register separately then js will move on and execute the
// following console and later once promise is resolved, following console will be printed.
//❓ Problem: Normally one used to get confused that JS will wait for promise to be
// resolved before executing following lines.
// 📌 async-wait way:
async function handlePromise() {
  // JS Engine will waiting for promise to resolve.
  const val = await p;
  console.log("Hello There!");
  console.log(val);
}
handlePromise(); // This time `Hello There!` won't be printed immediately instead after 3
// secs `Hello There!` will be printed followed by 'Promise resolved value!!'
// 💡 So basically code was waiting at `await` line to get the promise resolve before
// moving on to next line.
