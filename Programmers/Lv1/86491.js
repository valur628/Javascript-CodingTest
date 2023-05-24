//최소직사각형
function solution(sizes) {
    var w = 0, h = 0;
    sizes.forEach(i => {
        var [a1, a2] = i.sort((a, b) => b - a)
        if(a1 > w)
            w = a1;
        if(a2 > h)
            h = a2;
    })
    return w*h;
}