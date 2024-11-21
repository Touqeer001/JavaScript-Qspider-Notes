//! named function

function demo (){
    console.log("demo function");
    return 200;
}

console.log(demo());

//! function with expression

var fn = function (x,y){
    console.log(x, y);
    console.log("function with expression");
    return 10, 30;
};

let r1 = fn("s1","s2");
console.log(r1);

//~ Arrow function

const arr = (a,b)=>{
    console.log(a,b);
    return 100;

};

console.log(arr("var1","var2"));

const a1 = ()=> console.log("hello");
a1();

const a2 = () => 20;

a2();

const a3 = x=> x;
console.log(a3(2000));


//^ Higher order functions


function f1(x,y){
    console.log("HOF")
    x();
    console.log(y());
    console.log("end");
}

f1(function(){
    console.log("call back functions");
},
()=>"arr"
);



