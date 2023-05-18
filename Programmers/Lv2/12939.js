//최댓값과 최솟값
function solution(s) {
    return Math.min(...s.split(' ')) + ' ' + Math.max(...s.split(' '));
}