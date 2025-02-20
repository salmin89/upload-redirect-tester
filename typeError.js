function typeError() {
  const num = 42;
  num.toUpperCase(); // Can't call string methods on numbers
  null.toString(); // Can't call methods on null
}