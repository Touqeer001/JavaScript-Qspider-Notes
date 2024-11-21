//! literal array

var arr=[10,20,30];

//! Using array constructor

const ar=new Array(100,200,300)     //! constructor call
arr[0]=100;
arr[1]=100;
arr[2]=100;
console.log(ar);


//! Using Array.of();


let a=Array.of(200,300);
console.log(a);
 
console.log(new Array(6))   //! lenght 6 empty*6 

console.log(Array.of(6.34))  //! lenght 1 and element 1