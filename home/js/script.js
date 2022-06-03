let bar = document.querySelector(".bar ")
console.log(bar);
let nav = document.querySelector(".nav-bar");
console.log(nav);

bar.onclick = function () {
    nav.classList.toggle("nav-bar-show")
}
/*************************************************** */
window.onload = function (){
    document.querySelector(".loading-section").style.display="none";
    document.querySelector("body").style.cssText="overflow-y: auto;";
    console.log("loading")

}