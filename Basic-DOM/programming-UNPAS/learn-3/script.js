// DOM Manipulation

// Buat Element Baru
const pBaru = document.createElement("p");
const textPbaru = document.createTextNode("Paragraf Baru");

// Simpan Tulisan ke Dalam Paragraf
pBaru.appendChild(textPbaru);

// Simpan pBaru di akhir section a
const sectionA = document.getElementById("a");
sectionA.appendChild(pBaru);


const liBaru = document.createElement("li");
const teksLiBaru = document.createTextNode("Item Baru");

liBaru.appendChild(teksLiBaru)

const ul = document.querySelector("section#b ul");
const li2 = ul.querySelector("li:nth-child(2)");

ul.insertBefore(liBaru, li2);


const a = sectionA.getElementsByTagName("a")[0];
sectionA.removeChild(a);


const h1Baru = document.createElement("h1");
const teksH1 = document.createTextNode("Judul Baru");
h1Baru.appendChild(teksH1);

const sectionB = document.getElementById("b");
const p4 = sectionB.querySelector("p");

sectionB.replaceChild(h1Baru, p4);

pBaru.style.backgroundColor = "lightgreen";
liBaru.style.backgroundColor = "lightgreen";
h1Baru.style.backgroundColor = "lightgreen";