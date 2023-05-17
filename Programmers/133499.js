//옹알이 (2)

function solution(babbling) {
    var count = 0;
    var data1 = /(aya|ye|woo|ma)/g;
    var data2 = /(ayaaya|yeye|woowoo|mama)/g;
    for (var i of babbling){
        i = i.replace(data2, " ").replace(data1, "");
        !i.length ? count ++ : 0;
    }
    return count;
}

/*
function solution(babbling) {
    var result = 0;
    for (var i of babbling){
        if(/(aya|ye|woo|ma)\1+/g.test(i))
            continue;
        if(/^(aya|ye|woo|ma)+$/g.test(i))
            result++;
    }
    return result;
}
*/