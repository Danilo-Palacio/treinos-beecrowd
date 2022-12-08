var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const n1 = Number(lines[0])
const n2 = Number(lines[1])

const p1 = 3.5
const p2 = 7.5

const pontos=p1* n1 + p2 *n2
const media = pontos/(p1+p2)



console.log(`MEDIA = ${media.toFixed(5)}`)