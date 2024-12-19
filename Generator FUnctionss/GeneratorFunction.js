function *demo(){

    console.log("start")
    console.log("first")
    let x=10;
    yield x;
    console.log("second")
    let str='js'
    yield "java";
    console.log("third")
    let c=10000;
    yield c;
    console.log("end")
    return "finish";

}
let x=demo();
console.log(x.next())
console.log(x.next())
console.log(x.next())
console.log(x.next())
console.log(x.next())
