//[1차] 비밀지도
//<요약>
//주어지는 숫자 배열을 2진법으로 변환
//변환된 2개의 2진법 배열을 합침
//이때 OR을 사용해서 0:0일 때만 0이 나오도록 함
//합친 값을 #(1)과 공백(0)으로 바꾸고 배열로 반환

function solution(n, arr1, arr2) {
    return arr1.map((num, idx) => {
        var tmp1 = num.toString(2).padStart(n, '0');
        var tmp2 = arr2[idx].toString(2).padStart(n, '0');
        var answer = [];
        for(var i = 0; i < n ; i++)
            tmp1[i] == tmp2[i] && tmp1[i] == '0' ? answer += ' ' : answer += '#'
        return answer;
    });
}