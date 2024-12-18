// var a=200;
// console.log(this) 
// console.log(window==this)
// console.log(this.a)


// function demo(){
//     let s=100;
//     console.log((this))
// }
// demo( )

// function f1(){
//     let a=2000;
//     let arr=()=>{
        
//         console.log(this)

//     }
//     arr()

// }
// f1();

const obj = {
    name: "Touqeer",
    arrowFunc: () => {
        console.log(this);
    },
    getName(){
        console.log(this.name)
    }
};
obj.getName()  //! touqeer
obj.arrowFunc() //! window