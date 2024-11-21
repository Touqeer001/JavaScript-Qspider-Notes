//! Immediaate invoke function expression


var a=20
let b=30;

(function(a,c){
    let b=30;
    console.log('IIEF')
    console.log(a,c,b)


})(10,20)


//! Arrow function

(()=>{
    let a=30;
    console.log(a);
    console.log("arr fun")
})();