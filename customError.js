function customError() {
  class ValidationError extends Error {
    constructor(message) {
      super(message);
      this.name = "ValidationError";
    }
  }
  throw new ValidationError("Custom error message");

}
