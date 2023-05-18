//행렬의 덧셈
function solution(arr1, arr2) {
    return arr1.map((i, idx) => i.map((j, jdx) => j + arr2[idx][jdx]));
}