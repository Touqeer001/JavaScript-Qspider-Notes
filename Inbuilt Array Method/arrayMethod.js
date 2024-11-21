//! concat :  its merge the two or more array

let x=[10,20]
let y=[30,40]
let z=[50,60]

let r1=y.concat(y,z)
console.log(r1)
console.log(x)



//! indexOf() its find the search index 

let a =[10,20,30,40,20,10,30]
let r2=a.indexOf(20,3)
console.log(r2)


//!  lastIndexOf() 

let r3=a.lastIndexOf(30 , 5)


//! reverse();

let b=[100,90,80,70,60,50]
arr.reverse()
console.log(ar)


//!flat

let v=[10,"str", [30,[true,[1000]]],40,10n]
let r4=v.flat(4);
console.log(r4)




//! include

let newAr=["str" ,10n,true,false,{names:"abc"},100,200]
let r5=newAr.includes(10n,2)

let r6=newAr.includes({names:"abc"})  //! false
console.log(r5)


// ! fill
let p=[10,20,30,40,50,60,70]
p.fill(10,3,6)
console.log(p)
