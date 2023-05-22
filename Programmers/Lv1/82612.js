//부족한 금액 계산하기
function solution(price, money, count) {
    return Math.max(0,  (count + 1) * count * price / 2 - money);;
}