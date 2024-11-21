//! Push();    Add element to the end ,it modify the original array ang give new lenght

let ar=[10,20]
let r1=ar.push(100,"str",10n)

console.log(ar);
console.log(r1);


//!unshift();  add element to the begning ,
let fruites=["mangos","banan","water melon"]
let r2=fruites.unshift("pine Apple")

console.log(fruites)
consolelog(r2)


//!pop()  and shift()  remove element to the last and first , its only return the remove element which is remove

let eName=["sara","sachine","dhoni"]
eName.pop();
let r3=eName.pop();


let r4=eName.shift();
console.log(r4);
console.log(eName);



