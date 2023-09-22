console.log("hello ibad")
let x =1;
let y = 2;
console.assert(x + y == 3, "Expression returned false");
console.count();
console.error("You are bad boy")
const myObj = {firstname:"John", lastname:"Doe"};
console.error(myObj);   
// console.group();
// console.log("Hello again, this time inside a group!");
// console.log("Hello world!");

// console.groupEnd();
// console.log("and we are back.");
// console.groupCollapsed();
// console.log("Hello again, this time inside a collapsed group!");

const myObj1 = {firstname:"John", lastname:"Doe"};
console.info(myObj);

console.table(["Audi", "Volvo", "Ford"]);

// console.time();
// for (let i = 0; i < 100000; i++) {
//   // some code
// }
// console.timeEnd();
console.warn("This is a warning!");         



function myFunction() {
    myOtherFunction();
  }
  
  function myOtherFunction() {
    console.trace();
  }