function rangeError() {
  const arr = new Array(-1); // Can't create array with negative length
  (123).toFixed(101); // toFixed() only accepts 0-100
}
