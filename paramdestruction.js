// param destruction


const person = {
    Name: "ibad",
    gender : "male",
    age : 20,
};

function printdetails({Name, gender, age}){
    console.log(Name);
    console.log(gender);
    console.log(age);
}
printdetails(person);