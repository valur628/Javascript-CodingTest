//숫자의 표현
//숫자의 표현
function solution(n) {
    var count = 0;
    var start = 1;
    var end = 1;
    var sum = 0;

    if(n <= 1) return n;
    while (start <= n) {
        if (sum < n) {
            sum += end;
            end += 1;
        } else if (sum > n) {
            sum -= start;
            start += 1;
        } else {
            count += 1;
            sum -= start;
            start += 1;
        }
    }
    return count;
}