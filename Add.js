
document.addEventListener("DOMContentLoaded", () => {
    const fileInput = document.getElementById('image');
    let inputs = localStorage.getItem("Product");
    inputs = JSON.parse(inputs);
    const form = document.querySelector(".form1");
    const input = document.querySelectorAll(".input1");
    const btn = document.querySelector(".button1");
    const head = document.querySelector(".head");
    const data = {
        title: "",
        des: "",
        img: "",
        price: "",
        id: ""
    }
    btn.innerText = "Add Now";
    head.innerText = "New Product";

    data.id = 0;
    if (inputs) {
        input[0].value = inputs.title;
        input[1].value = inputs.des;
        input[2].value = inputs.price;
        data.id = inputs.id;
        head.innerText = "Update Product";
        btn.innerText = `Update Now`;
    }else{
        data.id = -1;
    }
    let dataArray = JSON.parse(localStorage.getItem("Data")) || [];
    let imageURL = "";
    let convertToURL = () => {
        const file = fileInput.files[0];

        if (file) {
            const reader = new FileReader();

            reader.onload = function (e) {
                imageURL = e.target.result;
                console.log('Image URL:', imageURL);
            };

            reader.readAsDataURL(file);
        }
    }
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        data.title = input[0].value;
        data.des = input[1].value;
        data.price = input[2].value;
        data.img = imageURL
        dataArray.push(data);
        const myjson = JSON.stringify(dataArray);
        localStorage.setItem("Data", myjson);
        window.location.href="index.html";
    })
    fileInput.addEventListener("change", () => {
        convertToURL();
    })
})