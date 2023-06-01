function solution(answers) {
    var patterns = [
        [1, 2, 3, 4, 5],
        [2, 1, 2, 3, 2, 4, 2, 5],
        [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
    ];
    var score = [0, 0, 0];
    for(var i = 0;i < answers.length ;i++) {
        for(var j=0;j < patterns.length; j++) {
            if(answers[i] == patterns[j][i % patterns[j].length]){
                score[j]++;
            }
        }
    }
    var maxed = Math.max(...score);
    var winners = [];
    
    for(var i = 0;i<3;i++) {
        if(score[i] == maxed) {
            winners.push(i+1)
        }
    }
    return winners;
}
