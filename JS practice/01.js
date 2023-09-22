// function addTwoNums(a,b){
//     try{
//         if(typeof(a)!='number'){
//             throw new ReferenceError('the first argument is not a number');
//         }else if(typeof(b)!='number'){
//             throw new ReferenceError('the second argument is not a number');
//         }else{
//             console.log(a+b);
//         }
//     }
//     catch(err){
//         console.log("Error!",err);
//     }
// }

// addTwoNums(5,5);
// console.log("It stills works!");


// function letterFinder(word, match) {
//     var condition1 =  typeof(word) == 'string' && word.length >= 2;
//     var condition2 = typeof(match) == 'string' && word.length == 1;
//     if(condition1==true  && condition2==true){
//         for(i = 0; i < word.length; i++) {
//             if(word[i] == match) {
//                 //if the current character at position i in the word is equal to the match
//                 console.log('Found the', match, 'at', i)
//             } else {
//                 console.log('---No match found at', i)
//             }
//         }
//     }else{
//         console.log("Please pass the correct arguments to the function")
//     }
// }

// letterFinder([],[]);
// letterFinder("cat","c");






// function processData(input) {



//     //Enter your code here
    
//     const obj = {
//         sam:99912222,
//         tom:11122222,
//         harry:12299933
//     };
//     const obj1 = Object.keys(obj);
//     const obj2 = Object.values(obj);
    
        
//     if((obj1[i]==input)){
//         console.log(`${obj1[i]}=${obj2[i]}`)
//     }else{
//         console.log("Not found");
//     }
// }

// processData("sam");
// processData("haward");


// let input = "tom";
// const obj = {
//     sam:99912222,
//     tom:11122222,
//     harry:12299933
// };
// const obj1 = Object.keys(obj);
// const obj2 = Object.values(obj);

// for(let i in obj1,obj2){

//     if((obj1[i]) == input){
//         // console.log("found");
//         console.log();

//     }
// }

// console.log(obj["harry"]);

// let input = "ibad ali";
// const inputLines = input.trim().split('\n');

// const numQueries = inputLines.length - 1;

// for (let i = 1; i <= numQueries; i++) { 
//     const query = inputLines[i].trim();
//     console.log(query);
// }

// console.log(numQueries);


// const n = 5;
// var num = n/2;
// while (num > 0) {
//     console.log(num);
//     num /= 2;
// };

function decimalToBinary(n) {
    if (n === 0) {
        return "0";
    }

    var binary = "";

    while (n > 0) {
        const remainder = n % 2;
        binary = remainder.toString() + binary;
        n = Math.floor(n / 2);
    }

    const count = binary.split("");
    var counter = 0;
    var maxConsecutive = 0;
    
    for (let i = 0; i < count.length; i++) {
        if (count[i] === "1") {
            counter++;
            if (counter > maxConsecutive) {
                maxConsecutive = counter;
            }
        } else {
            counter = 0;
        }
    }
    
    return maxConsecutive;
}

const n = 5;
const binaryResult = decimalToBinary(n);
console.log(binaryResult);



















