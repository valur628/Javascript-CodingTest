//약수의 합
function solution(n) {
    var answer = 0;
    for(var i = 0;i<=n;i++) {
        !(n%i) ? answer+=i : 0
    }
    return answer;
}