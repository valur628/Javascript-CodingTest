//멀리 뛰기
function solution(n) {
    var dp = [0, 1, 2];
    for (var i = 3; i <= n; i++) {
      dp[i] = (dp[i - 1] + dp[i - 2]) % 1234567;
    }
    return dp[n];
  }
  