new Promise((resolve) => setTimeout(resolve, 500)).then(() => {
  decodeURIComponent('%'); // this will not report CUSTOM
});