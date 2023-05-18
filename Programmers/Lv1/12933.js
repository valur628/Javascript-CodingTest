//정수 내림차순으로 배치하기
function solution(n) {
    return parseInt(Array.from(String(n), Number).sort((a, b) => b - a).join(''));
}