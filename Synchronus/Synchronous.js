// console.log("Synchronous")

// console.log("start")
//  setTimeout(()=>{
//     console.log("Executed start after 3 second")

//  },3000)
//  console.log("end")


 //! setInterval

//  let counter=0;
//   let intervalId=setInterval(()=>{
//     counter++;
//     console.log(`Executed ${counter } time`)
//     if(counter==5){
//         clearInterval(intervalId)
//         console.log("Interval Cleared")
//     }
//   },1000)

  console.log("Start");
setTimeout(() => console.log("Timeout"), 0);
console.log("End");