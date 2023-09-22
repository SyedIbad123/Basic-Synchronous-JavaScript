function myFunc2(name){
    console.log("inside my function");
    console.log(`your name is ${name}`);
};

function myFunc(callback){
    console.log('hello world');
    callback();

};


myFunc2(myFunc);