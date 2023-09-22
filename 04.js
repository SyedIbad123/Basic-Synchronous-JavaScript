// var can update your variables value but let is not
// var first_name = "ibad"
// console.log(first_name);



//Because var declarations are processed before any code is executed, declaring a variable anywhere in the code is equivalent to declaring it at the top. This also means that a variable can appear to be used before it's declared. This behavior is called hoisting, as it appears that the variable declaration is moved to the top of the function or global code.
// bla = 2; 
// var bla;
// console.log(bla);


// It's important to point out that only a variable's declaration is hoisted, not its initialization. The initialization happens only when the assignment statement is reached. Until then the variable remains undefined (but declared):

// console.log(bls); // This returns undefined
// bls = 3; 
// var bls;


// blq = 3; 
// let blq;
// console.log(blq); // This returns undefined

// var x = y, 
// y = "A";
// console.log(y);

// var foo = 1;
// var fin = "Ibad";
// console.log(foo+fin)

// let y = "4";
// let z = 3;
// console.log(y+z)


var value = null;
const i = {}
if (typeof(value) === typeof(i)){
    console.log(1)
}
else{
    console.log(3)
}

console.log(typeof(null))


// console.log(typeof (value))

// var value = 

var x = true;
if (x){
console.log(x);}