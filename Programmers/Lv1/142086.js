//가장 가까운 같은 글자
function solution(s) {
    const res = []; // 결과를 저장할 배열
    const strmap = {}; // 문자별 인덱스를 저장할 객체
  
    for (let i = 0; i < s.length; i++) {
      if (s[i] in strmap) {
        // 이미 나온 문자이면 자신과의 거리 계산
        res.push(i - strmap[s[i]]);
      }
      else {
        // 처음 나온 문자이면 -1 저장
        res.push(-1);
      }
      // 문자의 최신 인덱스 갱신
      strmap[s[i]] = i;
    }
    return res;
  }
  