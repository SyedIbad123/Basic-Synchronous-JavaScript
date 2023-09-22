//map method

const  number = [1,4,7,8];

const square = function (number){
    return number*number;
}
const squareNumber = number.map((number , index)=>{
    return `index: ${index}, number: ${number}`
});
console.log(squareNumber);
console.log(square(4));





 const users = [
     {firstname: "ibad", age: 18},
     {firstname: "mahad" , age: 17},
     {firstname: "fariya" , age: 12},
 ]
 const myuser = users.map((users)=> {
     return users.firstname
 });
 console.log(myuser);