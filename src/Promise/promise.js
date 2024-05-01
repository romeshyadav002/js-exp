const GITHUB_API = "https:/api.github.com/users/romeshyadav002";
const promise = fetch(GITHUB_API);

console.log(promise);
promise.then((data) => {
  console.log("promise data ", data);
});

console.log("i am here ");

const p1 = new Promise((res, rej) => {
  setTimeout(() => {
    res("i am p1");
  }, 2000);
});
console.log(p1);
p1.then((data) => {
  console.log("p1 data ", data);
});

console.log("i am after p1");
