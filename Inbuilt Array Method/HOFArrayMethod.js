let arr1=[10,20,30,40,50,60]
let result=(v,i,arr1)=>{
// console.log(v)
return v>30;
}

let rr=arr1.find(result)
console.log(rr)  //!40 output




//! findIndex

// let arr1=[10,20,30,40,50,60]
// let result=(v,i,arr1)=>{

// return v>30;
// }

// let rr=arr1.findIndex(result)  //! 3 index position
// console.log(rr)




//! filter

let arr=[20,10,30,40,69,56]
let r1=arr.filter((v)=>{
    return v>30 ;

})
console.log(arr)  //[, 40, 69, 56]
console.log(r1)



//! map

let r2=arr.map((v,i)=>{
    return v+10;

})

console.log(r2)   //! 20+10,10,30,40,69,56]===> [30, 20, 40, 50, 79, 66]

//! forEach

let newAr=[];
ar.forEach((v,i,a)=>{
    console.log(v)
    newAr.push(v+10)




})


//! some

let r3=ar.some(function(v,i){
    console.log(v)
    return v>=69

})

console.log(r3)

//! every
let r4=ar.every((v,i,arr)=>{
    return v>10;

})
console.log(r4)