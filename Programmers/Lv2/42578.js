//의상
function solution(clothes) {
    var answer = 1;
    var counts = {};
    // 각 의상의 종류별 개수를 카운트
    for (var i = 0; i < clothes.length; i++) {
        var type = clothes[i][1];
        counts[type] = (counts[type] || 0) + 1;
    }
    // 각 종류별 의상 조합의 수를 계산
    for (var type in counts) {
        // 해당 종류의 의상 개수에 1을 더한 값을 곱함
        answer *= (counts[type] + 1);
    }
    // 모든 종류의 의상을 선택하지 않은 경우를 제외하기 위해 1을 빼기
    answer -= 1;
    // 결과를 반환
    return answer;
}
