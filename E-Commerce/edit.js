let product={
    title:"",
    des:"",
    price:"",
    img:"",
    id:""
}
let edit=()=>{
const edited=document.querySelectorAll(".fa");

edited.forEach((e)=>{
    e.addEventListener("click",()=>{
        // console.log(e.parentElement.parentElement.child);
        product.img=e.parentElement.parentElement.children[0].src;
        product.title=e.parentElement.parentElement.children[1].innerText;
        product.des=e.parentElement.parentElement.children[2].innerText;    
        product.price=e.parentElement.parentElement.children[3].innerText;
        product.id=e.parentNode.parentNode.id;
        let productEdit=JSON.stringify(product);
        localStorage.setItem("Product",productEdit);
        
    })
})
}

