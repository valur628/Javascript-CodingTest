//네트워크: 미완
function solution(n, computers) {
    //네트워크의 수를 저장할 변수를 선언하고 0으로 초기화합니다.
    var networkCount = 0;

    //컴퓨터의 방문 여부를 체크할 배열을 생성하고 0으로 초기화합니다.
    let visited = Array.from({length:n}, ()=>0);

    //DFS 함수를 정의합니다.
    //이 함수는 특정 컴퓨터(startNode)에서 시작하여 연결된 모든 컴퓨터를 탐색합니다.
    function DFS(startNode){
        //방문한 컴퓨터를 표시합니다.
        visited[startNode] = 1;

        //모든 컴퓨터를 순회하면서
        for(let i = 0; i < n; i++){
            //startNode 컴퓨터와 연결되어 있고 아직 방문하지 않은 컴퓨터가 있다면
            if(computers[startNode][i] === 1 && visited[i] == 0){
                //해당 컴퓨터로 이동합니다.
                DFS(i);
            }
        }
    }

    //모든 컴퓨터를 순회하면서
    for(let i = 0; i < n; i++){
        //아직 방문하지 않은 컴퓨터가 있다면
        if(visited[i] == 0){
            //해당 컴퓨터에서 시작하는 DFS를 수행하고
            DFS(i);

            //네트워크의 수를 증가시킵니다.
            networkCount++;
        }
    }

    //네트워크의 수를 반환합니다.
    return networkCount;
}
