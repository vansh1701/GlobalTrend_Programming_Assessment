function question5(arr) {
    return [...new Set(arr)];
}
let arr = [1,2,4,1,3,4,5,6];
console.log(question5(arr));