//최대공약수와 최소공배수
function solution(n, m) {
    var euc = (a, b) => b ? euc(b, a % b) : a
    return [euc(n, m), (n * m) / euc(n, m)];
}