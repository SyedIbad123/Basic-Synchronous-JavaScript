input and nested if else

let userguess = prompt("guess a number")
console.log(userguess);

let birthday = 4
userguess = prompt("guess my birthday")
if(birthday == userguess){
    console.log("its true");
}
else{
    console.log("it's not true");
}

let num = 0021
userguess = prompt("guess lottery number")
if(num == userguess){
    console.log("yahoo! YOU GET THE LOTTERY TICKET");
}
else{
    console.log("dafah hojaiye");
    
    if(num > userguess){
        console.log("your number is less than actual number");

    }
    
    else{
        console.log(" your number is greater than actual number");
    }














