//이상한 문자 만들기
function solution(s) {
    return s.split(' ').map((word) => {
        return word.split('').map((char, idx) => {
            return idx % 2 === 0 ? char.toUpperCase() : char.toLowerCase();
        }).join('');
    }).join(' ');
}
