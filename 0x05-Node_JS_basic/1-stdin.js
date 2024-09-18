// 1-stdin.js
process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('data', () => {
  const chunk = process.stdin.read();

  if (chunk) {
    process.stdout.write(`Your name is: ${chunk}`);
  }
  // Check if the input is coming from a pipe (not interactive input)
  if (!process.stdin.isTTY) {
    process.stdout.write('This important software is now closing\n');
  }

  process.exit();
});
