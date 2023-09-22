function myFunc(){
    function myname(){
        console.log("my name is ibad");
    };
    return myname;
};
const ans = myFunc();
ans();



// return method


function myFunc(){
    function myname(){
        return "my name is ibad";
    };
    return myname;
};

const my = myFunc();
console.log(my());



// return function


function myFunc(){
    return function () {
        return "my name is ibad";
    };
};

const i = myFunc();
console.log(i());
