process.stdout.write('Welcome to Holberton School, what is your name?\n');

if (process.stdin.isTTY) {
  process.stdin.on('data', (data) => {
    process.stdout.write(`Your name is: ${data.toString()}`);
    process.exit();
  });
} else {
  process.stdin.on('data', (data) => {
    process.stdout.write(`Your name is: ${data.toString()}`);
    process.exit();
  });
  process.on('exit', () => {
    process.stdout.write('This important software is now closing\n');
  });
}
// process.stdout.write('Welcome to Holberton School, what is your name?\n');

// process.stdin.on('data', () => {
//   const name = input.toString().trim();
//   process.stdout.write(`Your name is: ${name}\n`);
//   if (!process.stdin.isTTY) {
//     process.stdout.write('This important software is now closing\n');
//   }
//   process.exit();
// });
