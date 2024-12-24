// async function demo(){
//     try{
//         console.log("start");
//         let c=2000;
//         console.log(c)
//         console.log("js")
//         console.log("End")
//         const z=400;
//         z=8000;
//         return "true";


//     }catch(e){
//         console.log(e)
//         console.log("error")


//     }

// }
// let x=demo();
// console.log(x)
// x.then((d)=>{
//     console.log("resolve")

// }).catch((e)=>{
//     console.log('rej')

// })


// Define an asynchronous function
async function fetchData() {
    try {
      // Simulate a delay using setTimeout wrapped in a Promise
      const data = await new Promise((resolve) => {
        setTimeout(() => {
          resolve('Data fetched successfully!');
        }, 2000); // 2 seconds delay
      });
  ``
      // Log the fetched data
      console.log(data);
    } catch (error) {
      // Handle any errors that occur during the fetch operation
      console.error('Error:', error);
    }
  }
  
  // Call the asynchronous function
  fetchData();
  