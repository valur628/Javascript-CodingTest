//완주하지 못한 선수
function solution(participant, completion) {
    participant.sort();
    completion.sort();
    for (var i = 0; i < participant.length; i++) {
        if (participant[i] !== completion[i]) {
            return participant[i];
        }
    }
    return participant[participant.length - 1];
}
