// function ibad(pakistan){
//     for(let i=0; i<ibad.length; i++);
//     {if(pakistan[i]==ibad)}
// }
// console.log(ibad("ibad"));

// function findTarget(array, target) {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === target) {
//       return i;
//     }
//   }
//   return -1;
// }

// // const myArray = [1, 3, 8, 90];
// // const ans = findTarget(myArray, 8);
// console.log(findTarget([1, 2, 3, 4, 5, 6], 4));



function ibad(arry, ali) {
  for (let i = 0; i < arry.length; i++) {
    if (arry[i] === ali) {
      return i;
    }
  }
  return -1;
}
console.log(ibad(["a", "d", "r", "t", "s"], "t"));
