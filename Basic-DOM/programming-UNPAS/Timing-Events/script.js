// setTimeOut()
// const time = setTimeout(() => {
//     console.log('Booo');
// }, 5000);

// const berhenti = document.querySelector('button');
// berhenti.addEventListener('click', () => {
//     clearTimeout(time);
//     console.log('selesai');
// });


// SetInterval()
// const time = setInterval(() => {
//     console.log('Hello');
// }, 500);

// const berhenti = document.querySelector('button');
// berhenti.addEventListener('click', () => {
//     clearInterval(time);
//     console.log('selesai');
// });


const tujuan = new Date('April 27, 2018 21:25:00').getTime();

const time = setInterval(() => {
    const sekarang = new Date().getTime();
    const selisih = tujuan - sekarang;

    const hari = Math.floor(selisih / (1000 * 60 * 60 * 24));
    const jam = Math.floor((selisih % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const menit = Math.floor((selisih % (1000 * 60 * 60)) / (1000 * 60));
    const detik = Math.floor((selisih % (1000 * 60)) / 1000);

    const h1 = document.querySelector('h1');
    h1.innerHTML = 'waktu anda tinggal : '+ hari +' hari + '+ jam +' jam + '
                + menit +' menit + '+ detik +' detik';
    
    if (selisih < 0) {
        clearInterval(time);
        h1.innerHTML = 'waktu anda HABIS !';
    }

}, 1000);