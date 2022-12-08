var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const n1 = Number(lines[0])
const n2 = Number(lines[1])
const n3 = Number(lines[2])

const p1 = 2
const p2 = 3
const p3 = 5

const pontos=p1* n1 + p2 *n2 + p3 * n3
const media = pontos/(p1 + p2 + p3)



console.log(`MEDIA = ${media.toFixed(1)}`)