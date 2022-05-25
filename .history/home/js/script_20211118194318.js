let bar = document.querySelector(".bar i")
console.log(bar);
let nav = document.querySelector(".nav-bar");
console.log(nav);

bar.onclick = function () {
    nav.classList.toggle("nav-bar-show")
}