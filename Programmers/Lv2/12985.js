//예상 대진표
function solution(n,a,b)
{
    var round;
    for(round = 1;Math.ceil(a/2) !== Math.ceil(b/2);round++) {
        a = Math.ceil(a/2);
        b = Math.ceil(b/2);
    }
    return round;
}