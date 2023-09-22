//object inside array


const user = [ 
    {userid:1, firstname:"ibad", gender:"male" },
    {userid:2, firstname:"mahad", gender:"male" },
    {userid:3, firstname:"john", gender:"male" }
]

// let [a,b,c] = user
// console.log(a)

const [{firstname:names}, ,{gender}] = user
console.log(names);
