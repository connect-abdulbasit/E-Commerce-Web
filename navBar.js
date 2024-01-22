document.addEventListener("DOMContentLoaded", () => {

    const closeBtn = document.querySelector(".closebtn");
    const nav = document.querySelector("nav");
    const openBtn = document.querySelector(".op");

    openBtn.addEventListener("click", () => {
        nav.style.width = "250px";
    })
    closeBtn.addEventListener("click", () => {
        nav.style.width = "0";
    })
})