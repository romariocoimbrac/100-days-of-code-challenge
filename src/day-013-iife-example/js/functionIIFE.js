const iife = (function () {
  function add(number) {
    return ++number;
  }
  return add;
})();
