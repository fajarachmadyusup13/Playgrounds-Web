// const btnClose = document.querySelector('.close');
// btnClose.addEventListener('click', () => {
//     const container = document.querySelector(".container");
//     const card = container.querySelector(".card");
//     container.removeChild(card);
//     btnClose.parentElement.remove();
// });


// const close = document.querySelectorAll(".close");
// for (let i = 0; i < close.length; i++) {
//     close[i].addEventListener('click', (e) => {
//         console.log('tes ke-'+i)
//         close[i].parentElement.remove();
//         console.log(e.target)
//         e.target.parentElement.remove();
//     });
// }


// const close = document.querySelectorAll(".close");
// close.forEach((el) => {
//     el.addEventListener('click', (e) => {
//         // console.log(e.target)
//         e.target.parentElement.remove();
//         e.stopPropagation();
//     });
// });


// const cards = document.querySelectorAll(".card");
// cards.forEach((card) => {
//     card.addEventListener('click', () => {
//         alert('ok');
//     });
// });

const container = document.querySelector(".container");
container.addEventListener('click', (e) => {
    console.log(e.target);
    if(e.target.className == "close") {
        e.target.parentElement.remove();
        e.preventDefault();
    }
});