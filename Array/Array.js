//! HOMOGENOUS ARRAY
let fruite=["apple","mango","ornage"]


let obj={name:"abc"};


console.log(fruite.length)
console.log(typeof fruite)


//! cheack the datatype of array and obj [array.isArray]
console.log(Array.isArray(100))  //! false
console.log(Array.isArray(fruite)) //! true


//! Heterogeneous Array:
let arr=[
    10,
    200n,
    ()=>{
        console.log("Start")
        var b=200;
        console.log(b)
        return "arr";
    },
    ["10","20"],
    "javascript",
    {name:"sachine"}
    ,
    null,


]


console.log(arr.length)   //!10
console.log(arr[3][0])  //!Access 3 index and 1 element in the second array

console.log(arr[2]());


arr[6]="replaced array"  //! add value to index 6


//! Delete array
delete arr[3] 
console.log(arr)
console.log(arr[7]);
