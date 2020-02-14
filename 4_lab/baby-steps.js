let a = process.argv.slice(2).reduce((a, b) => parseInt(a) + parseInt(b), 0);
console.log(a);