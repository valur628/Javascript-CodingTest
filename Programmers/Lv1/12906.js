//같은 숫자는 싫어
function solution(arr){
    return arr.filter((val, idx) => val != arr[idx+1])
}