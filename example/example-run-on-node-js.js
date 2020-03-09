const Computer = require('../lib/computer.js');

const computer = new Computer();

console.log(`1 + 2 = ${computer.add(1, 2)}`);
console.log(`1 - 2 = ${computer.sub(1, 2)}`);