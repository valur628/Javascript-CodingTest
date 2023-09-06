//프로세스
function solution(priorities, location) {
    var answer = 0;
    var maxs = Math.max(...priorities);
    
    while (priorities.length > 0) {
        var now = priorities.shift()
        if(maxs > now) {
            priorities.push(now);
            location == 0 ? location = priorities.length-1 : location--;
        }
        else {
            answer++;
            maxs = Math.max(...priorities);
            if(location == 0) break
            else location--;
        }
    }
        return answer;
}