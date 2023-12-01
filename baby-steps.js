const args = process.argv.slice(2);

// Using Array.prototype.reduce to sum the numbers
const sum = args.reduce((acc, val) => acc + Number(val), 0);

// Printing the sum to the console
console.log(sum);
