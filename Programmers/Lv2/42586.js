//기능개발
function solution(progresses, speeds) {
    var answer = [];
    
    while(progresses.length > 0) {
        progresses = progresses.map((acc, idx) => acc + speeds[idx])
        
        var count = 0;
        while(progresses[0] >= 100) {
            progresses.shift();
            speeds.shift();
            count++;
        }
        if(count > 0) {
            answer.push(count)
        }
    }
    
    return answer;
}