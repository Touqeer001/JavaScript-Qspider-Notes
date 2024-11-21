
//! Nasted function

function demo(){

console.log("Demo function")
let a=200;
var b=200

console.log(a,b)

function f1(){

    console.log(a)  //! closure
    console.log("nasted function")

    return "str";

}
f1();


}
demo();


function f2(){

let x=10;
console.log(x)

function inner(){

    console.log("nested function")
}
return inner;


}

//f2()()    //!to acces inner function data
//let r=f2(); //! ANother way to get data inside the function 

//r();