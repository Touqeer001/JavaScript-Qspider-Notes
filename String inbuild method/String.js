let str="Javascript"
console.log(str.slice(4,9))
console.log(str.slice(4))
console.log(str.slice(-4,-1))


//! substring()
console.log(2,5)
console.log(3,4)

//! include
let s1="this is javascript lecture and you can learn javascript"
console.log(s1.length)
console.log(s1.includes("javascript",20))  //!false
console.log(s1.includes("javascript"))   //! true
console.log(s1.includes("is ")) //true

//! replace()
let r1=s1.replace("javascript" , "java")
console.log(r1)

//! replaceAll()
let r2=s1.replaceAll("javascript","java")
console.log(r2)

//! to uppercase
console.log(str.toUpperCase())

let h="Heelo world"
console.log(h.toLowercase())

//! concat()

console.log(str.concat(h))


//! toString()

let val=true;
console.log(typeof val)
console.log(typeof val.toString())


//! indexOf()

console.log(s1.indexOf("this", 1))
console.log(s1.lastIndexOf("javascript"))



//! trim  it remove the void space from the string from both position
let c="        Hello world       "
console.log(c.trim())
console.log(c.trimStart())
console.log(c.trimEnd())


 
