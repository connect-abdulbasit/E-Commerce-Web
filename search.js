const searchInput = document.querySelector(".search input");

searchInput.addEventListener("input", (e) => {
    let searched = e.target.value.toLowerCase();
    console.log(e.target.value);
    const product = document.querySelectorAll(".prod");
    product.forEach((e) => {
        if (e.children[1].innerText.toLowerCase().includes(searched)) {
            e.classList.remove("hide");
        } else {
            e.classList.add("hide");
        }
    })
})