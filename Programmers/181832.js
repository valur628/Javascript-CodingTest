//정수를 나선형으로 배치하기
function solution(n) {
    var pos = [[0,1], [1, 0], [0, -1], [-1, 0]];
    var answer = new Array(n).fill(0).map(() => new Array(n).fill(0));
    var x = 0, y = 0, dir = 0;
    for(var i = 1 ; i <= n*n ; i++) {
        answer[x][y] = i;
        var nX = x + pos[dir][0];
        var nY = y + pos[dir][1];
        if(nX >= n || nX < 0 || nY > n || nY < 0 || answer[nX][nY] != 0) {
            dir = (dir + 1) % 4
            nX = x + pos[dir][0];
            nY = y + pos[dir][1];
        }
        x = nX;
        y = nY;
    }
    return answer;
}