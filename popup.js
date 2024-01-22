function popUp() {
    const popup = document.querySelector(".popup");
    const popBtn = document.querySelector(".popupBtn");
    const closePopup = document.querySelector(".bar2");

    const del = document.querySelectorAll(".material-icons");
    del.forEach((d) => {
        d.addEventListener("click", (e) => {
            popup.classList.remove("hide");
            popBtn.children[0].addEventListener("click", () => {
                d.parentNode.parentNode.remove();
                popup.classList.add("hide");
                console.log(d);
            })
            popBtn.children[1].addEventListener("click", () => {
                popup.classList.add("hide");
            })
            closePopup.addEventListener("click", () => {
                popup.classList.add("hide");
            })
            console.log(e.target.parentNode);
        });
    });
}