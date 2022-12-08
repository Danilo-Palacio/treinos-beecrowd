var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');


const salaryFixed = Number(lines[1])
const sales = Number(lines[2])
const comission = 15/100

const comissionSales = sales * comission
const salary  = salaryFixed + comissionSales



console.log(`TOTAL = R$ ${salary.toFixed(2)}`)