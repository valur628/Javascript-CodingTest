//K번째수
function solution(array, commands) {
    return commands.map(c => {
        return array.slice(c[0]-1, c[1]).sort((a, b) => a - b).slice(c[2]-1, c[2])[0];
    })
}