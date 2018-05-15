// const thumbnail = document.querySelector(".thumbnail");
// const jumbo = document.querySelector(".jumbo");

// thumbnail.addEventListener('click', (e) => {
//     let srcTarget = e.target.src;
//     jumbo.setAttribute('src', srcTarget);
// })


const container = document.querySelector(".container");
const jumbo = document.querySelector(".jumbo");
const thumbs = document.querySelectorAll(".thumb");

container.addEventListener('click', (e) => {

    if (e.target.className == 'thumb') {
        let srcTarget = e.target.src;
        jumbo.setAttribute('src', srcTarget);
        jumbo.classList.add('fade');
        setTimeout(() => {
            jumbo.classList.remove('fade');
        }, 500);

        thumbs.forEach((thumb) => {
            // if (thumb.classList.contains("active")) {
            //     thumb.classList.remove("active");
            // }
            thumb.className = "thumb";
        });

        e.target.classList.add('active');
    }
    
})