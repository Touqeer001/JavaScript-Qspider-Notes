
let x="javAscrIpt"
let vowels="aeiouAEIOU"
 function countVowels(x){
    let count=0;
    for(let val of x) if(vowels.includes(val)) count++;
    return count; 


 }

 console.log(countVowels(x))
 console.log(countVowels("JAVA"))


 //! remove duplicate
 let arr=[10,20,30,40,10,10,20,10,30]
 let newAr=[]
 for(let m of arr) if (newAr.includes(m)==false)
    console.log(newAr)


 let num=19;
 function isPrime(num){
    if(num==1) return false;
    let count=0;
    for(let i=2;i<num;i++) if(num%i==0) count++;
    return count==0;
 }
 console.log(isPrime(num))
 console.log(12)
 console.log(1)



 //! filter prime number from array

 let numAr=[20,28,29,33,31,69,67,93]

 let res=numAr.filter((v)=>{
    return isPrime(v)

 })
 console.log(res)