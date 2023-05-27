//문자열 내 마음대로 정렬하기
function solution(strings, n) {
    return strings.sort((a, b) => {
        return a[n] === b[n] ? a.localeCompare(b) : a[n].localeCompare(b[n]);
    });
}