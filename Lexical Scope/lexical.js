//! Lexial scoping or scope chaining

var y=300;

function f1(){



    let y=500;

    function f2() {

        const y=300;
        console.log(y);
    }
    f2();

}
f1();



//! window object

console.log(window)
console.log(this)    //!window and this both are same

console.log(window===this);






var a=200;
function f1(){


    var a =400;
    console.log(a)
    console.log(this.a)

}
f1();