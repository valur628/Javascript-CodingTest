//타겟 넘버
function solution(numbers, target) {
    function dfs(index, currentSum) {
        if (index === numbers.length) {
            if (currentSum === target) {
                answer++;
            }
            return;
        }
        
        dfs(index + 1, currentSum + numbers[index]);
        dfs(index + 1, currentSum - numbers[index]);
    }
    
    let answer = 0;
    dfs(0, 0);
    return answer;
}