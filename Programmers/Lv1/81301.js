//숫자 문자열과 영단어
function solution(s) {
    var arr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    arr.forEach((num, idx) => {
        s = s.split(num).join(idx);
    });
    return parseInt(s);
}
