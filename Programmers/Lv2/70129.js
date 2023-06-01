//이진 변환 반복하기
function solution(s) {
    var bin = 0;
    var zero = 0;
    while (s != '1') {
        bin += 1;
        var found = s.match(/0/g);
        if (found) { zero += found.length; }
        s = s.replace(/0/g, '');
        s = s.length.toString(2);
    }
    return [bin, zero];
}