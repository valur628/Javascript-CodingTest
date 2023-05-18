//콜라츠 추측
function solution(num, c=0) {
    return num == 1 ? (c >= 500 ? -1 : c) : solution(num%2==0 ? num /2 : num * 3 + 1, ++c)
}