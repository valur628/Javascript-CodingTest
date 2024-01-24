//이어 붙인 수
function solution(num_list) {
    return [
        num_list.filter(num => num % 2 === 0).join(''),
        num_list.filter(num => num % 2 !== 0).join('')
    ].reduce((a, c) => a + +c, 0);
}

    /*
    let odd = [], even = [];
    num_list.forEach(item => {
        item % 2 === 0 ? even.push(item) : odd.push(item);
    });
    return +even.join('') + +odd.join('');
    */