// 🔹 5. throttle() Polyfill
// Throttling ensures a function is executed at most once in a specified time interval.

function throttle(fn, limit) {
  let lastCall = 0;
  return function (...args) {
    const now = Date.now();
    if (now - lastCall >= limit) {
      lastCall = now;
      fn.apply(this, args);
    }
  };
}

function scrollHandler() {
  console.log("User scrolled!");
}
const throttledScroll = throttle(scrollHandler, 2000);
window.addEventListener("scroll", throttledScroll);
