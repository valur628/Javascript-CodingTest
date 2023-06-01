//올바른 괄호
function solution(s) {
    if (s[i] == ')') return false;
    var count = 0;
    for (var i = 0; i < s.length; i++) {
        s[i] == '(' ? count+=1 : count-=1;
        if (count < 0) return false;
      }
    return count == 0;
}
  