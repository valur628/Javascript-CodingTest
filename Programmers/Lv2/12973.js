//짝지어 제거하기
function solution(s) {
    var stack = [];
    for (var i = 0; i < s.length; i++) {
        if (stack.length === 0 || stack[stack.length - 1] !== s[i]) {
            stack.push(s[i]);
        } else {
            stack.pop();
        }
    }
    return stack.length === 0 ? 1 : 0;
}
