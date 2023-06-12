//카펫
function solution(brown, yellow) {
    var total = brown + yellow;
    for (var i = 3 ; i <= Math.sqrt(total); i++) {
        if (total % i == 0) {
            var h = total / i;
            var w = total / h;
            if((w - 2) * (h - 2) == yellow) {
                return [h, w];
            }
        }
    }
}