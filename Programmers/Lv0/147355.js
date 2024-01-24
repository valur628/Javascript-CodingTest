//크기가 작은 부분문자열
function solution(t, p) {
    let answer = 0;
    for(let i = 0; i <= t.length - p.length; i++) {
        if (+t.slice(i, p.length + i) <= +p) {
            answer++;
        }
    }
    return answer;
}