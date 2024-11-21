//! undefined:

let x ;
console.log(x);
console.log(typeof x);


//^ null:

let o ={
    name: "abc",
    id: 120,

};

o= null;
console.log(typeof o);


//^ bigInt

let b= 10000000000000000000000n;
console.log(b);
console.log(typeof b);

let n1 = 10n;
console.log(typeof n1);

//&  NaN

let n2 = 10 - "str";
console.log(n2);
console.log(typeof n2);



//! typecasting /////////////////////////////////////////

//! implicit

console.log(10 +"10"); //number is converted into string
console.log("200"-20); //string is converted into number
console.log("str"-200); //NaN
console.log(100 /"10"); //same as above 
console.log("5"* "5");
console.log(59%"str");





