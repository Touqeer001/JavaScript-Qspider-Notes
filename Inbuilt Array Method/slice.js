//! slice();  extract the part of the array

const a=[10,20,30,40,50]
console.log(a.slice(4))  //! otput 50

let r1=a.slice(2,6)
console.log(r1)  //! [30, 40, 50]


console.log(a.slice(-4,-1)) //! o/p [20, 30, 40]



//!splice();

let arr=[10,20,30]
let r2=arr.splice(2,1) //! 10,20 output

// let r3=arr.splice(2,0,100,200,300)  //! 10,20,100,200,300, 30
// let r4=arr.splice(1,1,"str")
console.log(r2);   //! [10, 'str', 100, 200, 300]
console.log(arr);



