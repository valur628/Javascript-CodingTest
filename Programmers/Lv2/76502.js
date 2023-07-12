//괄호 회전하기
function solution(s) {
    var count = 0;
    var brackets = s;
    for(var i = 0;i<s.length;i++) {
    brackets = bracketShift(brackets);
        if(bracketCheck(brackets)) {
            count++;
        }
    }
    return count;
}

function bracketCheck(bracket) {
    var bList = {"(" : ")", "[" : "]", "{" : "}"};
    var verifty = bracket.split('').reduce((a, c) => {
        if (c === bList[a[a.length - 1]]) {
            a.pop();
        }
        else {
            a.push(c);
        }
        return a;
    }, [])
    return verifty.length === 0;
}

function bracketShift(bracket) {
    return bracket.substr(1, bracket.length - 1) + bracket[0];
}