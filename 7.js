function question7(n) {
    let tmp = [];
    let a = 0, b = 1;
    for (let i = 0; i < n; i++) {
        tmp.push(a);
        [a, b] = [b, a + b];
    }
    return tmp;
}
console.log(question7(10));
