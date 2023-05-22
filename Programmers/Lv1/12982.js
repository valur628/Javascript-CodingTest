//예산
function solution(d, budget) {
    return d.sort((a, b) => a - b).filter(amount => {
        budget -= amount;
        return budget >= 0;
    }).length;
}
