//자릿수 더하기
function solution(n) {
	var answer = 0;
	var temp = n;
	for (var i = 0; i < String(n).length; i++) {
		answer += temp % 10;
		temp = Math.floor(temp / 10);
	}

	return answer;
}
