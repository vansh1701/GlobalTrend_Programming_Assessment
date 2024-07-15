function question6(s) {
    return s.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}
let str = "there are flowers in the garden";
console.log(question6(str));
