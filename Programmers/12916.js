//문자열 내 p와 y의 개수
function solution(s){
    return (s.match(/p/ig) || []).length == (s.match(/y/ig) || []).length ? true : false;
}