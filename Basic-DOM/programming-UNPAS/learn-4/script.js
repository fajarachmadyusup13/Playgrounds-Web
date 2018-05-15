const p3 = document.querySelector(".p3");

function ubahWarna() {
    p2.style.background = "lightblue";
}


const p2 = document.querySelector(".p2");
p2.onclick = ubahWarna;

const p4 = document.querySelector("section#b p");
p4.addEventListener('click', () => {
    const ul = document.querySelector("section#b ul");
    const liBaru = document.createElement("li");
    const teksBaru = document.createTextNode("Item Baru");

    liBaru.appendChild(teksBaru);

    ul.appendChild(liBaru);
});