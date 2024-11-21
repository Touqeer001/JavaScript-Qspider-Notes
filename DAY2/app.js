// ! variable

var a=10;
console.log(a);
var a=100;
console.log(a);

// & Cannot redeclare block-scoped variable 'b'
let b=20;
console.log(b);
// let b=200;
b=200;
console.log(b);

//  *Cannot redeclare block-scoped variable 'c'.
const c=30;
console.log(c);
//  const c=300;
// c=300;  //!Uncaught TypeError: Assignment to constant variable.


//& ----------------------------------------

// var x;
// x=1000;
// console.log(x)

// let y;
// y=2000;
// console.log(y);

// const z; //!'const' declarations must be initialized.

let p,q,r;
