const spinner = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   '];
let timeInterval = 100;
for (const position of spinner) {
  setTimeout(() => {
    process.stdout.write(position);
  }, timeInterval);
  timeInterval += 200;
}