//JadenCase 문자열 만들기
function solution(s) {
    var words = s.toLowerCase().split(' ');
    for (var i = 0; i < words.length; i++) {
        if (words[i] !== '') {
            words[i] = words[i][0].toUpperCase() + words[i].slice(1);
        }
    }
    return words.join(' ');
}
