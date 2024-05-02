Promise.all()
   A promise is a placeholder for a value that's going to be available sometime later. The promise helps handle
asynchronous operations. JavaScript provides a helper function Promise.all(promisesArrayOrIterable) to handle
multiple promises at once, in parallel, and get the results in a single aggregate array.
    💡 To conclude, the Promise.all() waits for all the input promises to resolve and returns a new promise that resolves to an
array containing the results of the input promises. If one of the input promises is rejected, the Promise.all() method immediately returns a promise that is rejected with an error of the first rejected promise.

Promise.allSettled()
    Promise.allSettled() method that accepts a list of Promises and returns a new promise that resolves after all the
    input promises have settled, either resolved or rejected.


💡 Promise.all() -> Fail Fast
💡 Promise.allSettled() -> Will wait and provide accumulative result

Promise.race()
    The Promise.race() static method accepts a list of promises as an iterable object and returns a new promise that
    fulfills or rejects as soon as there is one promise that fulfills or rejects, with the value or reason from that promise.
    The name of Promise.race() implies that all the promises race against each other with a single winner, either
    resolved or rejected.

Promise.any()
    The Promise.any() method accepts a list of Promise objects as an iterable object. If one of the promises in the
    iterable object is fulfilled, the Promise.any() returns a single promise that resolves to a value which is the result of
    the fulfilled promise.

    But what if all promises got failed, so the returned result will be aggregated error i.e. [err1, err2, err3].




Promise.all(promises) – waits for all promises to resolve and returns an array of their results. If any of the given
promises rejects, it becomes the error of Promise.all, and all other results are ignored.

Promise.allSettled(promises) (recently added method) – waits for all promises to settle and returns their results as
an array of objects with:
status: "fulfilled" or "rejected"
value (if fulfilled) or reason (if rejected).

Promise.race(promises) – waits for the first promise to settle, and its result/error becomes the outcome.

Promise.any(promises) (recently added method) – waits for the first promise to fulfill, and its result becomes the
outcome. If all of the given promises are rejected, AggregateError becomes the error of Promise.any.

Promise.resolve(value) – makes a resolved promise with the given value.

Promise.reject(error) – makes a rejected promise with the given error.

Of all these, Promise.all is probably the most
common in practice.