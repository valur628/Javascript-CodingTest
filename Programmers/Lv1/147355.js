//크기가 작은 부분문자열
function solution(t, p) {
    var answer = 0;
    for(var i = 0;i<=t.length-p.length;i++)
        if (parseInt(t.slice(i, i + p.length)) <= parseInt(p)) 
            answer++;
    return answer;
}