function demo(a,b,...c){
    console.log(arguments)
    console.log(...arguments)
    console.log(Array.isArray(arguments))
}
demo(10,20,30,33);

