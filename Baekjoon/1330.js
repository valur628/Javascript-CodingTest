//두 수 비교하기
var [a, b] = require('fs').readFileSync('/dev/stdin').toString().split(' ');
console.log(+a > +b ? ">" : +a < +b ? "<" : "==");