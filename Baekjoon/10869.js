//사칙연산
var input = require('fs').readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);
console.log(`${input[0]+input[1]}\n${input[0]-input[1]}\n${input[0]*input[1]}\n${Math.floor(input[0]/input[1])}\n${input[0]%input[1]}`);