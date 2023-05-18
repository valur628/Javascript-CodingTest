//자연수 뒤집어 배열로 만들기
function solution(n) {
    return Array.from(String(n), Number).reverse();
}