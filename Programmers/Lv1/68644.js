//두 개 뽑아서 더하기
function solution(numbers) {
    const answer = [];
    for (var i = 0; i < numbers.length; i++) {
      for (var j = i + 1; j < numbers.length; j++) {
        var sum = numbers[i] + numbers[j];
        if (!answer.includes(sum)) {
          answer.push(sum);
        }
      }
    }
    return answer.sort((a, b) => a - b);
  }