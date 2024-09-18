// 1-stdin.js
process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('data', (input) => {
  const name = input.toString().trim();
  process.stdout.write(`Your name is: ${name}\n`);
  // Check if the input is coming from a pipe (not interactive input)
  if (!process.stdin.isTTY) {
    process.stdout.write('This important software is now closing\n');
  }

  process.exit();
});
