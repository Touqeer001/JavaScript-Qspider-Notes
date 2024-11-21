const student={
    name:"TK",
    id:200,
    skills:["js","react"],
    address:{
        doorNo:101,
        location:"jSPIDER "
    },
    id:400,
    demo:()=>{
        console.log("Demo Function")
    },
    isMarried:true,
    children:"infinit",
    fan:"MS"


}
console.log(student.id)
console.log(student.address.doorNo)
student.demo();  


//! By using BRackets
console.log(student[children]);
student["demo"]();


//! add element to object
student.salary=400000;
student["salary"]=20000;


//! update
student.isMarried=true;



//! delete

delete student["fan"];
console.log(student)
