localStorage.removeItem("Product");
const products = document.querySelector(".products");
for (let index = 0; index < 10; index++) {
    products.innerHTML += `<div class="prod" >
    <div class="img skeleton"></div>
    <h3 class="title " data-max-characters="20">
        <div class="skeleton skeleton-text"></div>
        <div class="skeleton skeleton-text"></div>
    </h3>
    <p class="des " data-max-characters="80">
        <div class="skeleton skeleton-text"></div>
        <div class="skeleton skeleton-text"></div>
        <div class="skeleton skeleton-text"></div>
    </p>
    <div class="price "></div>
    <div class="EditDel">
    <div class="icon skeleton">

    </div>
    <div class="icon skeleton"></div>
    </div>

</div>`;
}
(async function () {
    let count = 0;
    let data = await fetch('https://fakestoreapi.com/products');
    let details = await data.json();
    //    let data=await fetch('https://dummyjson.com/products')
    //    let details=await data.json()
    products.innerHTML = "";
    details.forEach(element => {
        products.innerHTML += `<div class="prod" id="${count}">
        <img src="${element.image}" class="img skeleton">
        <h3 class="title" data-max-characters="20">${element.title}</h3>
        <p class="des" data-max-characters="80">${element.description}</p>
        <div class="price">${element.price}</div>
        <div class="EditDel">
        <i class="material-icons">delete</i>
        <i style="font-size:24px" class="fa"><a href="index2.html" class="edit">&#xf044;</a></i>
        </div>

    </div>`;
        count++;
    });
    const storedData = localStorage.getItem("Data");
    if (storedData) {
        let flag = 1;
        const newlyAddedData = JSON.parse(storedData);
        for (let index = 0; index < newlyAddedData.length; index++) {
            const box = document.querySelectorAll(".prod");
            for (let index1 = 0; index1 < box.length; index1++) {
                if (box[index1].id == newlyAddedData[index].id) {
                    box[index1].innerHTML = `<img src="${newlyAddedData[index].img}" class="img">
                    <h3 class="title" data-max-characters="20">${newlyAddedData[index].title}</h3>
                    <p class="des" data-max-characters="80">${newlyAddedData[index].des}</p>
                    <div class="price">${newlyAddedData[index].price}</div>
                    <div class="EditDel">
                    <i class="material-icons">delete</i>
                    <i style="font-size:24px" class="fa"><a href="index2.html" class="edit">&#xf044;</a></i>

                    </div>`;
                    flag = 0;
                }

            }
            if (flag == 1) {
                products.innerHTML = `<div class="prod" id="${count}">
                <img src="${newlyAddedData[index].img}" class="img">
                    <h3 class="title" data-max-characters="20">${newlyAddedData[index].title}</h3>
                    <p class="des" data-max-characters="80">${newlyAddedData[index].des}</p>
                    <div class="price">${newlyAddedData[index].price}</div>
                    <div class="EditDel">
                    <i class="material-icons">delete</i>
                    <i style="font-size:24px" class="fa"><a href="index2.html" class="edit">&#xf044;</a></i>

                    </div>
                </div>`
                    + products.innerHTML;
                count++;

            }
            flag = 1;
        }
    }
    wordlimit();
    popUp();
    edit();
})();
