//분수의 덧셈
function solution(numer1, denom1, numer2, denom2) {
    var gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
    
    var numer = numer1 * denom2 + numer2 * denom1;
    var denom = denom1 * denom2;
    var Val = gcd(numer, denom);
    
    return [numer / Val, denom / Val];
  }
  