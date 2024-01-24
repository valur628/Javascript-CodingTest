//문자 개수 세기
function solution(my_string) {
    let answer = new Array(52).fill(0);
    let words = my_string.split('');
    words.forEach(item => {
        answer[item.charCodeAt() < 91 ? item.charCodeAt() - 65 : item.charCodeAt() - 71]++;
    });
    return answer;
}