//연속 부분 수열 합의 개수
function solution(elements) {
    var len = elements.length;
    var sets = new Set();
    for(var i = 0; i < len; i++) {
        for (var j = 0; j < len; j++) {
        var sum = 0;
            for(var k = 0; k < i; k++) {
                sum += elements[(j + k) % len];
            }
            sets.add(sum);
        }
    }
    return sets.size;
}