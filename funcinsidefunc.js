
function app() {
    let myfunc = () => {
        console.log("my name is ibad");
    }

    let sum = (num_1,num_2) => {
        return num_1 + num_2 ;
    }

    let multiply = (num_1,num_2) => {
        return num_1 * num_2;
    }
    myfunc()
    console.log(sum(2,4));
    console.log(multiply(2,3));
}
app()
