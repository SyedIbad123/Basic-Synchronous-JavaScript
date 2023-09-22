// filter method

// even

const number = [1,3,4,6,7,8]

const iseven = function(number){
    return number %2=== 0;
};

const evennumbers = number.filter(iseven);
console.log(evennumbers);

// odd

const numbers = [1,3,4,6,7,8]

const isodd = function(numbers){
    return numbers %2!== 0;
};

const oddnumbers = numbers.filter(isodd);
console.log(oddnumbers);