let Container = document.querySelector(".container")
let Banner2 = document.querySelector(".banner2")
let Banner3 = document.querySelector(".banner3")
// let H1 = document.querySelectorAll("h1")
// const nightmode = () => {
//     Container.classList.add("nightmode")
// }

// const lightmode = () => {
//     Container.classList.remove("nightmode")   
// }

function nightmode() {
    Container.style.background = "rgb(40, 40, 40)"
    Banner2.style.background = "rgb(40, 40, 40)"
    Banner3.style.background = "rgb(40, 40, 40)"
// H1.style.color = "white"
}
function lightmode() {
    Container.style.background = "white"
    Banner2.style.background = "white"
    Banner3.style.background = "white"
}
console.log(nightmode)
console.log(lightmode)