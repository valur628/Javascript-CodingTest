//직사각형 별찍기
process.stdin.setEncoding('utf8');
process.stdin.on('data', d => console.log(`${'*'.repeat(d.split(" ")[0])}\n`.repeat(d.split(" ")[1])));