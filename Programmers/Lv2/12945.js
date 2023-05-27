//피보나치 수
function solution(n) {
    var fibo = [0, 1];
    for (var i = 2; i <= n; i++) {
        fibo[i] = (fibo[i - 1] + fibo[i - 2]) % 1234567;
    }
    return fibo[n];
}
