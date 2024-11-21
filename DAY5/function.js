function demo (a, b) {
    console.log(a,b);
    console.log("hello");
    console.log("hi");
    console.log("bye");
}

demo(10,20);
demo(10n,"js");
demo();  //undefined

function f2(x = "val 1", y ="val y"){
    console.log("welcome");
    console.log(x);
    console.log(y);
}

f2(20,10);
f2();


//! return statement and return type

function f1(p,q){
    let x = 90;
    console.log("f1 function");
    console.log(x);
    return p+q;

}

let r1 = f1(100,200);
console.log(r1);
// console.log(fl(100,200));


function f3(e,f){
    console.log("f3 function");
    return 10, 20,30,e,f;

}

let r2 = f3(100,200);
console.log(r2);