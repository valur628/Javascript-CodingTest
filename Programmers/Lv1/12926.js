//시저 암호
function solution(s, n) {
    return s.split('').map(c => {
        if (c == ' ') return ' ';
        var start = c.charCodeAt(0) <= 90 ? 65 : 97;
        return String.fromCharCode((c.charCodeAt(0) - start + n) % 26 + start);
    }).join('');
}

/*
function solution(s, n) {
    var answer = '';
    for (var i = 0;i<s.length;i++) {
        if (s[i] == " ") {
            answer += " ";
        }
        else {
            var cc = s.charCodeAt(i);
            if(cc <= 90) {
                cc+=n;
                if(cc>90) {
                    cc-=26;
                }
            }
            else {
                cc+=n;
                if(cc>122) {
                    cc-=26;
                }
            }
            answer += String.fromCharCode(cc);
        }
    }
    return answer;
}
*/