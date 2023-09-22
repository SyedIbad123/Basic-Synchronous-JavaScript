// importnat array method
// foreach loop

// const numbers = [1,3,4,7,8,9]
// numbers.forEach(function(number , index){
//     console.log(`index is ${index} and number is ${number}`);
// });


// myfunc = (num) => {
//     console.log(num[3]);
//         for (let i = 0; i < array.length; i++) {
//             console.log(num);         
//         }
// } 
// myfunc([1,2,3,4]);

// multiply by 2

// numbers.forEach(function(number){
//     console.log(number*2);
// });

// const users = [
//     {firstname: "ibad", age: 18},
//     {firstname: "mahad" , age: 17},
//     {firstname: "fariya" , age: 12},
// ]
// users.forEach(function(user){
//     console.log(user.firstname);
// });


const users = [
    {firstname: "ibad", age: 18},
    {firstname: "mahad" , age: 17},
    {firstname: "fariya" , age: 12},
]
users.forEach((user) => { 
    console.log(user.firstname, user.age);
});