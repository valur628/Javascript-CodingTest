//H-Index

function solution(citations) {
    var answer = 0;
    var h = 0;
    citations.sort((a, b) => b - a);
    for(var i = 0 ; i < citations.length ; i++) {
        if (h < citations[i]) {
            h++;
        }
        else {
            break;
        }
    }
    
    answer = h;
    return answer;
}
