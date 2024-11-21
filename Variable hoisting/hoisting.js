//! Variable hoisting


// var a;
// let b;
// const c;

console.log("start")

// console.log(a)  
 //console.log(b)  //!Uncaught ReferenceError: Cannot access 'b' before initialization
 console.log(c)  //! Uncaught ReferenceError: Cannot access 'c' before initialization
var a=20
let b=20
const  c=40;

console.log(a,b,c);



