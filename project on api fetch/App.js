let data=window.fetch("https://fakestoreapi.com/products");
console.log(data)
let container=document.querySelector(".container");
 console.log(container)

data.then((d)=>{
    d.json().then((d)=>{
        
    d.map((v)=>{
           
            let {id,title,price,description,image}=v;
            // console.log(price)
            container.innerHTML += `
    <div>
    <h1>${id}</h1>
    </div>
    <div>
    <h1>${title}</h1>
    </div>
    <div>
    <h1>${price}</h1>
    </div>
    <div>
    <h1>${description}</h1>
    </div>
    <div>
    <img src=${image} alt=${id}/>

    </div>
    <div>
    <h1>${id}</h1>
    </div>

        
  
`;
        })

    })
}
),(e)=>{
    console.log(e)
}