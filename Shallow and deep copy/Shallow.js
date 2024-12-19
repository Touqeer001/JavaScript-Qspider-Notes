//! By using object reference


let obj1={
    name:"toueer",
    id:1234,
    str:["js","React"]
}

console.log(obj1)
let copy=obj1;
copy.name="Ansari"
console.log(copy)

//! By using spread operatior

let copy2={...obj1}
console.log(copy2)
copy2.name="Khursheed"
console.log(copy2)

 
//! BY using assign() method

const person={name:"touqeer",age:24}
const job={role:"developer",company:"tech"}

const personWithJob=Object.assign({},person,job)
console.log(personWithJob)
console.log(personWithJob === person);


//! by using for in loop


let copy4={};
for(let i in obj1){
    copy4[i]=obj1[i]
    copy4.name="abc"
    console.log(copy4)
}
console.log(copy4)  
console.log(copy4===obj1)

