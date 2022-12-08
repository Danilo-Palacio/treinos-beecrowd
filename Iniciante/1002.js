var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const raio = Number(lines[0])
const n = 3.14159

const area=n*(raio**2)




console.log(`A=${area.toFixed(4)}`)