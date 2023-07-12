//행렬의 곱셈
function solution(arr1, arr2) {
    var n = arr1.length;
    var m = arr2[0].length;

    var result = Array.from(Array(n), () => Array(m).fill(0));

    for (var i = 0; i < n; i++) {
        for (var j = 0; j < m; j++) {
            for (var k = 0; k < arr1[i].length; k++) {
                result[i][j] += arr1[i][k] * arr2[k][j];
            }
        }
    }

    return result;
}
