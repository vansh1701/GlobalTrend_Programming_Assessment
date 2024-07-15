let output = "";
function question1(){
for(let i=1;i<=100;i++){
    if(i%3===0 && i%5===0){
        output += "FizzBuzz ";
    }
    else if(i%3===0 && i%5!=0){
        output += "Fizz ";
    }
    else if(i%5===0 && i%3!=0){
        output += "Buzz ";
    }else{
        output += i+" ";
    }
}
}
question1();
console.log(output);
