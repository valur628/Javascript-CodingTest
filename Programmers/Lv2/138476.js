//귤 고르기
function solution(k, tangerine) {
    var count = {}; // 각 귤의 크기별 개수를 저장할 객체(count)를 선언합니다.
  
    // tangerine 배열을 순회하면서 각 귤의 크기별 개수를 count 객체에 저장합니다.
    for (var i = 0; i < tangerine.length; i++) {
        var size = tangerine[i];
      count[size] = (count[size] || 0) + 1; // 해당 크기의 귤이 count 객체에 없으면 0으로 초기화한 뒤 1을 더해 저장합니다.
    }
  
    // count 객체의 키(귤의 크기)를 내림차순으로 정렬한 배열을 생성합니다.
    const sortedSizes = Object.keys(count).sort((a, b) => count[b] - count[a]);
  
    let total = 0; // 서로 다른 크기의 귤 종류의 수를 저장할 변수(total)를 초기화합니다.
  
    // sortedSizes 배열을 순회하면서 귤을 고르는 과정을 진행합니다.
    for (let i = 0; i < sortedSizes.length; i++) {
      if (k <= 0) break; // k가 0 이하면 더 이상 귤을 고를 수 없으므로 반복문을 종료합니다.
      total++; // 귤의 크기 종류의 수를 증가시킵니다.
      k -= count[sortedSizes[i]]; // 선택한 크기의 귤 개수를 k에서 차감합니다.
    }
  
    return total; // 서로 다른 크기의 귤 종류의 수를 반환합니다.
  }
  