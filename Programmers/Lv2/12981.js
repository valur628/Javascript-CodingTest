//영어 끝말잇기
function solution(n, words) {
    var wordData = []; // 사용된 단어를 저장할 배열
    var order = 1; // 끝말잇기 순서
    var turns = 1; // 현재 차례의 사람
  
    for (var i = 0; i < words.length; i++) {
      // 현재 차례의 사람이 이전에 사용된 단어를 말한 경우
      if (wordData.includes(words[i]) ||
          (i > 0 && words[i][0] !== words[i - 1][words[i - 1].length - 1])) {
        return [turns, order]; // 탈락한 사람의 번호와 차례를 반환
      }
  
      wordData.push(words[i]); // 단어를 사용된 단어 리스트에 추가
      turns++; // 다음 차례의 사람으로 넘어감
  
      // 모든 사람의 차례가 끝나면 다시 1번부터 시작
      if (turns > n) {
        turns = 1;
        order++;
      }
    }
  
    return [0, 0];
  }
  