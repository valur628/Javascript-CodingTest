//내적
function solution(a, b) {
    return a.reduce((c, d, e) => (c += a[e] * b[e]), 0);
}