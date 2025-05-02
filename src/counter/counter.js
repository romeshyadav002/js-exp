function makeCounter(initialValue = 0) {
  let value = initialValue;
  function increment() {
    value++;
    return value;
  }
  function decrement() {
    value--;
    return value;
  }
  function reset() {
    value = 0;
    return value;
  }
  return {
    increment,
    decrement,
    reset,
  };
}
