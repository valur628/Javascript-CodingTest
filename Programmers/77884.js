//약수의 개수와 덧셈
function solution(left, right) {
    var answer = 0;
    var arr = [...Array(right-left+2)].map((v,i) => left-1+i);
    for(var i=1; i <= right-left+1; i++){
    var count = 1;
        for(var j=1; j<=arr[i]/2; j++){
            if(arr[i]%j == 0) {
                count++;
            }
        }
        count % 2 == 0 ? answer+=arr[i] : answer-=arr[i];
    }
    return answer;
}