var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const numberFuncionari = Number(lines[0])
const hours = Number(lines[1])
const receiveToHours = Number(lines[2])



const salary  = hours*receiveToHours



console.log(`NUMBER = ${numberFuncionari}`)
console.log(`SALARY = U$ ${salary.toFixed(2)}`)