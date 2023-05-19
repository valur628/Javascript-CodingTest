//구구단
const input = require('fs').readFileSync('/dev/stdin').toString();
const n = +input

for (let i = 1; i < 10; i++) {
    console.log(`${n} * ${i} = ${n * i}`);
}