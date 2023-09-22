// function myapp(){
//     const myvar = "value1" 
    

//     myfunc = () => {
//         console.log("inside my function");
//     }
//     myfunc()
//     console.log(myvar);
// }
// myapp()


function myapp(){
    const myvar = "value1" 
    
    myfunc = () => {
        const myvar = "value2"
        console.log("inside my function", myvar);
    }
    console.log(myvar);
    myfunc()
}
const myvar = "value3"
myapp()
