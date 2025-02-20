function networkError() {
  fetch("nonexistent-url.com").catch((error) =>
    console.log("Network error:", error)
  );
}
