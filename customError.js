function customError() {
  throw new Error("Custom error message");
  class ValidationError extends Error {
    constructor(message) {
      super(message);
      this.name = "ValidationError";
    }
  }
}
