
function fatorial(n) {
    if (n === 1 || n === 0) {
        return 1;
    } else {
        console.log(n);
        return n * fatorial(n - 1);
    }
}

console.log(fatorial(5)); // 120