//n^2 배열 자르기
function solution(n, left, right) {
    var answer = [];
    for (var i = left; i <= right ; i++) {
        answer.push(Math.max(Math.floor(i/n), i%n) + 1);
    }
    return answer;
}