var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');


const sales = Number(lines[0,1])
const sales = Number(lines[0,1])
const sales = Number(lines[0,2])

const comissionSales = sales * comission
const salary  = salaryFixed + comissionSales



console.log(`TOTAL = R$ ${salary.toFixed(2)}`)