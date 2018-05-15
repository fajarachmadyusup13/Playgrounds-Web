const tUbahWarna = document.getElementById("tUbahWarna");
tUbahWarna.addEventListener("click", () => {
    // document.body.style.backgroundColor = "lightblue";
    document.body.classList.toggle("biru-muda");
});

const tAcakWarna = document.createElement("button");
const teksTombol = document.createTextNode("Acak Warna");
tAcakWarna.appendChild(teksTombol);
tUbahWarna.after(tAcakWarna);

tAcakWarna.addEventListener("click", () => {
    const red = Math.round(Math.random()* 255+1);
    const green = Math.round(Math.random()* 255+1);
    const blue = Math.round(Math.random()* 255+1);

    document.body.style.backgroundColor = 'rgb('+red+','+green+','+blue+')';
});


const sMerah = document.querySelector("input[name=sMerah]");
const sHijau = document.querySelector("input[name=sHijau]");
const sBiru = document.querySelector("input[name=sBiru]");

sMerah.addEventListener('input', () => {
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = 'rgb('+r+','+g+','+b+')';
});

sHijau.addEventListener('input', () => {
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = 'rgb('+r+','+g+','+b+')';
});

sBiru.addEventListener('input', () => {
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = 'rgb('+r+','+g+','+b+')';
});

document.body.addEventListener("mousemove", (event) => {
    const posX = Math.round((event.clientX / window.innerWidth)*255);
    const posY = Math.round((event.clientY / window.innerWidth)*255);
    document.body.style.backgroundColor = 'rgb('+posX+','+posY+',100)';
});