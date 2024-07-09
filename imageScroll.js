// const slide = document.querySelector(".topImages");
// let links = ['https://icms-image.slatic.net/images/ims-web/a58e45c5-c172-46e0-bff7-dddc7f59d08b.jpg', 'https://icms-image.slatic.net/images/ims-web/2d351faa-b64a-4b71-ac9e-bf5e6d886f1a.jpg', 'https://icms-image.slatic.net/images/ims-web/652ba17f-166f-471b-8c2d-e1336df2b007.png', '//icms-image.slatic.net/images/ims-web/4c134ee5-692d-4bd4-8637-5057646fd1c7.jpg_1200x1200.jpg']
// slide.innerHTML = `<div class="topImg"><img src="${links[0]}"></div>
// <div class="topImg"><img src="${links[1]}"></div>
// <div class="topImg"><img src="${links[2]}"></div>
// <div class="topImg"><img src="${links[3]}"></div>`;
// let count = 0;
// const slides = document.querySelectorAll(".topImg img");

// let rotate = () => {
//     // slides.forEach(
//     //     (slide, index) => {
//     //         slide.style.left = `${index * 100}%`;

//     //     }

//     // )
//     // slides.forEach(
//     //     (slide) => {
//             slide.style.transform = `translateX(-${100}%)`;
//     //     }

//     // )
//     // setTimeout(()=>{
//     // slide.appendChild(slide.children[0]);
//     // console.log(slide.children[1],slide.children[0]);
//     // slide.removeChild(slide.children[0]);
//     // },2000);
//     setTimeout(() => {
//         slide.appendChild(slide.firstElementChild);
//         slide.style.transition = "none"; // Disable transition to reset the position instantly
//         slide.style.transform = "translateX(0)";
//         setTimeout(() => {
//             slide.style.transition = "transform 0.5s ease-in-out"; // Re-enable transition
//         });
//     }, 500);
//     // count++;
//     // if (count > 3) {
//     //     count = 0;
//     // }
// }
// setInterval(rotate, 3000);
// // setInterval(rotate,3000);
// // count = 1;
// // let rotate = () => {
// //     slide.innerHTML += `<div class="topImg"><img src="${links[count]}"></div>`;
// //     const slides = document.querySelectorAll(".topImg img");
// //     slides[1].style.left = `${100}%`;
// //     slides.forEach(
// //         (slide) => {
// //             slide.style.transform = `translateX(-${1 * 100}%)`;
// //         }
// //     )
// //     setTimeout(()=>{
// //         slide.removeChild(slide.children[0]);
// //     },1500);
// //     count++;
// //     if (count > 3) {
// //         count = 0;
// //     }
// // }
const slide = document.querySelector(".topImages");
let links = ['https://icms-image.slatic.net/images/ims-web/a58e45c5-c172-46e0-bff7-dddc7f59d08b.jpg', 'https://icms-image.slatic.net/images/ims-web/2d351faa-b64a-4b71-ac9e-bf5e6d886f1a.jpg', 'https://icms-image.slatic.net/images/ims-web/652ba17f-166f-471b-8c2d-e1336df2b007.png', '//icms-image.slatic.net/images/ims-web/4c134ee5-692d-4bd4-8637-5057646fd1c7.jpg_1200x1200.jpg'];
slide.innerHTML = `<div class="topImg"><img src="${links[0]}"></div>
<div class="topImg"><img src="${links[1]}"></div>
<div class="topImg"><img src="${links[2]}"></div>
<div class="topImg"><img src="${links[3]}"></div>`;

let rotate = () => {
    // Move the container to the left by the width of one image
    slide.style.transform = `translateX(-100%)`;

    // After the animation, move the first image to the end
    setTimeout(() => {
        slide.appendChild(slide.firstElementChild);
        slide.style.transition = "none"; // Disable transition to reset the position instantly
        slide.style.transform = "translateX(0)";
        setTimeout(() => {
            slide.style.transition = "transform 0.5s"; // Re-enable transition
        });
    }, 500);
};

setInterval(rotate, 3000);

