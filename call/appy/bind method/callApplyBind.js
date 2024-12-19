console.log("start")

let std={
    naame:"touqeer",
    id:124,

    sub:["js","React"]


}

function demo(a,...b){
    console.log(a)
    console.log(b) 
  
    console.log(this.naame);

}
demo.apply(std,[10,20,30,40])