
let obj={
    name:"ANsari",
    id:123
}

//! By using structure clon Method

let copy= structuredClone(obj)
copy.id=111;
console.log(copy)

//? By using JSON.Parse MEthod

let deepCopy= JSON.parse(JSON.stringify(obj))
deepCopy.id=222
console.log(deepCopy)