const scroll=document.querySelector(".scroll-top");
window.addEventListener("scroll",()=>{
    if (document.body.scrollTop>20||document.documentElement.scrollTop>20) {
        scroll.style.display="flex";
    }else{
        scroll.style.display="none";

    }
})
scroll.addEventListener("click",()=>{
    document.body.scrollTop=0;
    document.documentElement.scrollTop=0;
})