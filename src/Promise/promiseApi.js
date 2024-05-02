const p1 = new Promise((res, rej) => {
  setTimeout(() => {
    res("p1");
  }, 1000);
});

const p2 = new Promise((res, rej) => {
  setTimeout(() => {
    res("p2");
  }, 1000);
});

const p3 = new Promise((res, rej) => {
  setTimeout(() => {
    res("p3");
  }, 3000);
});

const promiseAll = Promise.all([p1, p2, p3]);
console.log(promiseAll);
promiseAll.then((data) => {
  console.log({ promiseAll: data });
});

const p4 = new Promise((res, rej) => {
  rej("p4");
});

const p5 = new Promise((res, rej) => {
  setTimeout(() => {
    rej("p4");
  }, 3000);
});

// const promiseAll1 = Promise.all([p1, p2, p3, p4]);
// console.log(promiseAll1);
// promiseAll1
//   .then((data) => {
//     console.log({ data });
//   })
//   .catch((err) => {
//     console.log("error in ", err);
//     throw err;
//   });

const promiseAllSettled = Promise.allSettled([p1, p2, p3, p4]);
console.log(promiseAllSettled);
promiseAllSettled
  .then((data) => {
    console.log({ promiseAllSettled: data });
  })
  .catch((err) => {
    console.log("error in ", err);
    throw err;
  });

const promiseRace = Promise.race([p1, p2, p3, p5]);
console.log(promiseRace);
promiseRace
  .then((data) => {
    console.log({ promiseRace: data });
  })
  .catch((err) => {
    console.log("error in promiseRace", err);
    throw err;
  });

const promiseAny = Promise.any([p1, p2, p3, p4]);
console.log(promiseAny);
promiseAny
  .then((data) => {
    console.log({ promiseAny: data });
  })
  .catch((err) => {
    console.log("error in ", err);
    throw err;
  });

const promiseAny1 = Promise.any([p4, p5]);
console.log(promiseAny1);
promiseAny1
  .then((data) => {
    console.log({ promiseAny1: data });
  })
  .catch((err) => {
    console.log("error in ", err);
    throw err;
  });
