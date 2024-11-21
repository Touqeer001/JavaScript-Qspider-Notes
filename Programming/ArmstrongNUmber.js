//! Armstrong Number

let num=153;

function isArmstrong(n){
    let temp=n;
    let sum=0;
    let count=n.toString().length();

    while(n>0){
        let d=n%10;
        sum=sum+d**count;
        n=parseInt(n/10)

    }
    return sum==temp;
}

console.log(isArmstrong(num))
console.log(isArmstrong(370))
console.log(isArmstrong(371))


let arr=[20,30,10,7,6,300,69]

console.log(Math.max(...arr))
console.log(Math.min(...arr))


let big=arr[0]
for(let v of arr){
    if(v>big) big=v;
}
console.log(big)


let small=arr[0]
for(let v of arr){
    if(v<small) small=v;
}
console.log(small)
