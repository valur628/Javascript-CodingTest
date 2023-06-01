//체육복
function solution(n, lost, reserve) {
    var answer = 0;
    var student = new Array(n).fill(1);
    for(var i = 0; i < lost.length; i++){
        student[lost[i]-1]--;
    }
    for(var i = 0; i < reserve.length; i++) {
        student[reserve[i]-1]++;
    }
    
    for(var i = 0; i < n; i++) {
        if(student[i] == 0) {
            if(i > 0 && student[i - 1] == 2) {
                student[i]++;
                student[i - 1]--;
            }
            else if(i < student.length-1 && student[i + 1] == 2) {
                student[i]++;
                student[i + 1]--;
            }
        }
    }
    for(var i = 0; i < n ;i++) {
        if(student[i] > 0) {
            answer++;
        }
    }
    return answer;
}