//!function hoisting

demo();

function demo(){

let c=400;
console.log(c);
console.log("demo Function")
return 100;
}

x();
let x=()=>'arr';


y()
var y=function(){

    console.log("ananymouse fn")
};