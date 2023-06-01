//다음 큰 숫자
function solution(n) {
    var count = bin(n);
    var next = n + 1;
    while (bin(next) !== count) {
        next++;
    }
    return next;
}
function bin(num) {
    return num.toString(2).match(/1/g).length;
}
