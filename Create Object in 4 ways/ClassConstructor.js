//! Class Constructor


class Employee{
    static bonus=300;
    salary=4000;
    constructor(id,name,skill){
        this.eId=id;
        this.eName=name;
        this.eSkill=skills;
        console.log(this)

    }
    demo(){
        console.log("demo function")

    }
    static fn(){
        console.log("static method")


    }

    //! Employee.fn();
    //  console.log(Employee.bonus);
    
}

console.log(Employee.bonus)


let e1=new Employee(20,"sachin",["java","js"])
console.log(e1)

let e2=new Employee(200,"dhoni",["rect","core java"])
console.log(e2)


