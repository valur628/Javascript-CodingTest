//문자열 다루기 기본
function solution(s) {
    return (s.length === 4 || s.length === 6) && /^[0-9]+$/.test(s) ? true : false;
}