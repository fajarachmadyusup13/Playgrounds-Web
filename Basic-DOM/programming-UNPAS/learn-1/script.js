// DOM Selection

// getElementById()
// const judul = document.getElementById("judul");
// judul.style.color = "red";
// judul.style.backgroundColor = "grey";
// judul.innerHTML = "Fajar";

// getElementsByTag()
// const p = document.getElementsByTagName("p");
// for (let i = 0; i < p.length; i++) {
//     p[i].style.backgroundColor = "green";
// }

//  getElementsByClass()
// const p1 = document.getElementsByClassName("p1");
// p1[0].innerHTML = "Boom";

// querySelector()
// const p4 = document.querySelector("#b p");
// p4.style.color = "green";

// const li2 = document.querySelector("section#b li:nth-child(2)");
// li2.style.color = "orange";

// querySelectorAll()
// const p = document.querySelectorAll("p");
// for (let i = 0; i < p.length; i++) {
//     const element = p[i];
// }

// Persempit Scope
// const sectionb = document.getElementById("b");
// const p4 = sectionb.querySelector("p");
// p4.style.backgroundColor = "red";
// const sectionb = document.querySelector("section#b");
// const p4 = sectionb.getElementsByTagName("p")[0];
// p4.style.backgroundColor = "blue";