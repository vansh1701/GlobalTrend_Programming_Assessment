function question3(arr) {
    let tmp = [];
    function flatten(element) {
        if (Array.isArray(element)) {
            for (let item of element) {
                flatten(item);
            }
        } else {
            tmp.push(element);
        }
    }
    flatten(arr);
    return tmp;
}
const arr = [1, [2, [3, 4], 5], [6, 7], 8];
console.log(question3(arr));
