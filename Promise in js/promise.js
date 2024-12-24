let p=new Promise(function(res,rej){
    var rest=false;
    if(rest){
        res("Resolve PRomise 1")

    }else rej("Rejected promise")
});
console.log(p)

p.then((d)=>{
    console.log(d)

})
.catch((e)=>{
    console.log(e)

})
