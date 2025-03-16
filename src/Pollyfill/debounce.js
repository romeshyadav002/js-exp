// 4. debounce() Polyfill
// Debouncing ensures a function is executed only after a certain delay, preventing unnecessary calls.

function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}

function log() {
  console.log("User stopped typing...");
}
const debouncedLog = debounce(log, 300);
// window.addEventListener("keyup", debouncedLog);
