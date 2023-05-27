//폰켓몬
function solution(nums) {
    var maxNums = nums.length / 2;
    var uniqueNums = [...new Set(nums)];
    return Math.min(maxNums, uniqueNums.length);
  }
  