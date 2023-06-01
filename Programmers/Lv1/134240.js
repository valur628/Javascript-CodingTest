//푸드 파이트 대회
//#####
//순서대로 배열 정렬
//숫자 나누기 2하고 버림함
//한번 반복하고 0찍기(다만 0은 이미 food[0]에 있음)
//index 1부터 다시 시작해야하니까 반대로 뒤집고 반복하기
function solution(food) {
    var div = food.map((cur) => Math.floor(cur / 2));
    div.shift();
    var answer = div.flatMap((cnt, i) => String(i + 1).repeat(cnt));
    return answer.join('') + '0' + answer.reverse().join('');
}

/*
function solution(food) {
    var answer = '';
    var div = food.map((cur) => Math.floor(cur/2))
    div.shift()
    for(var i = 0;i<div.length;i++) {
        var cnt = div[i];
        for(var j = 0;j<cnt;j++) {
            answer += String(i+1);
        }
    }
    answer += String(0);
    for(var i = div.length-1;i>=0;i--) {
        var cnt = div[i];
        for(var j = 0;j<cnt;j++) {
            answer += String(i+1);
        }
    }
    return answer;
}*/