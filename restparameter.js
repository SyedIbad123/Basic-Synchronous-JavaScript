// sum = (a,b,c) =>{
//         console.log(`the value of a is ${a}`);
//         console.log(`the value of b is ${b}` );
//         console.log(`the value of c is ${c}`);
// }
// sum(1);

mysum = (...num) => {
  total = 0;
  for (i of num) {
    total = total + i;
  }
  return total;
};

console.log(mysum(9,3,8));
