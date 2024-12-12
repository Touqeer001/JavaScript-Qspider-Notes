//!increment and decrement:

//  let i=10;
// console.log(i++);  //!10
//  console.log(i);  //1

// let i=10;
//  console.log(++i);  
//  console.log(i);

//  let j=10;
// console.log(j--);
//  console.log(j);


// let j=10;
// console.log(--j);
// console.log(j);
  


// document.write("WELCOME to javascript");
// document.writeln(" THANKS YOU" + "<br>");
// document.write("JAVASCRIPT");


//! named FUnction

// function demo(a,b){
//     console.log("demo")
//     return 10,20;
    
// }
// // console.log(demo())


// //! function with expression
// // var fn = function (x,y){
// //     console.log(x, y);
// //     console.log("function with expression");
// //     return 10, 30;
// // };

// // let r1 = fn("s1","s2");
// // console.log(r1);

// let x=function d(a,b){
//     console.log(a,b)
//     return ;



// }
// // let r1=x(11,22)
// // console.log(r1)

// //! Arroew function


// const arr=(a,b)=>{
//     console.log(a,b)
//     return ;

// }
// console.log(arr(10,20))

// const a1=x=>x;
// console.log(a1(2000))



// function f1(x,y){
//     console.log("HOF")
//     x();
//     console.log(y());
//     console.log("end");
// }

// f1(function(){
//     console.log("call back functions");
// },
// ()=>"arr"
// );





let a=Array.of(200,300);
console.log(a);
 
console.log(new Array(4))   //! lenght 6 empty*6 

console.log(Array.of(6.34)) 



// let arr=[10,20,30]
// let r=arr.pop()
// console.log(r)



let newAr=["str" ,10n,true,false,{names:"abc"},100,200]
let r5=newAr.includes(10n)

let r6=newAr.includes({names:"abc"})  //! false
console.log(r6)

let p=[10,20,30,40,50,60,70]
p.fill(10,3,6)
console.log(p)   //! [10, 20, 30, 10, 10, 10, 70]




let arr=["banana","Appple","orange","watermelon","mango"]

let vowels="AEIOUaeiou";
for(let i=0;i<arr.length;i++){
    let word=arr[i]
    let findvowels="";

   for(let char of word){
    if(vowels.includes(char)){
        findvowels =findvowels+char;
    }
   }
   console.log(`word:${word}, vowels:${findvowels}`)
    
}


