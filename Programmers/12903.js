//가운데 글자 가져오기
function solution(s) {
    return s.length % 2 == 0 ? s.substr(s.length/2-1, 2) : s.substr(s.length/2, 1);
}