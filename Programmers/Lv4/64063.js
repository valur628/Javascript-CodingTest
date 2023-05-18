//호텔 방 배정 - 오답
function solution(k, room_number) {
    let answer = [];
    let rooms = Array(k+1).fill(0); // 0으로 초기화된 (k+1) 크기의 배열 생성

    for(let i=0; i<room_number.length; i++){
        let room = room_number[i];
        if(rooms[room] === 0){
            // 원하는 방이 비어 있으면 바로 배정
            answer.push(room);
            rooms[room] = 1;
        } else {
            // 원하는 방이 이미 배정되어 있으면 원하는 방보다 번호가 크면서 비어 있는 방을 찾음
            for(let j=room+1; j<=k; j++){
                if(rooms[j] === 0){
                    answer.push(j);
                    rooms[j] = 1;
                    break;
                }
            }
        }
    }

    return answer;
}