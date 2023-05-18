//옹알이 (1)
function solution(babbling) {
    var count = 0;
    var data1 = /(aya|ye|woo|ma)/g;
    for (var i of babbling){
        i = i.replace(data1, "");
        !i.length ? count ++ : 0;
    }
    return count;
}