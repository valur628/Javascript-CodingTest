//N개의 최소공배수
function solution(arr) {
    function lcm(a, b) {
        var gcd = 1;
        for(var i = 2;i<=Math.min(a, b);i++) {
            if(a % i == 0 && b % i == 0) {
                gcd = i;
            }
        }
        return (a * b) / gcd;
    }
    var first = arr[0];
    for (var i = 1;i < arr.length;i++) {
        first = lcm(first, arr[i]);
    }
    return first;
}