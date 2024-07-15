function question4(str1, str2) {
    return str1.split('').sort().join('') === str2.split('').sort().join('');
}
let str1 = "care"
let str2 = "race"
console.log(question4(str1,str2));