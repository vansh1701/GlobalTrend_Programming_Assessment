function question10(s) {
    return s.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}
let s = "i want to get settle in new york."
console.log(question10(s));