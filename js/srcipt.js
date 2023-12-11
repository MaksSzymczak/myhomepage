console.log("Cześć fajnie ze jesteś😁")
let button = document.querySelector(".button");
let body = document.querySelector(".body");
let imageButton = document.querySelector(".imageButton");
let buttonSpan = document.querySelector(".buttonSpan");
let image = document.querySelector(".image");
let naviLink = document.querySelector(".naviLink");
imageButton.addEventListener("click", () => {
    image.remove();
    imageButton.remove();
})

button.addEventListener("click", () => {
   
    
    body.classList.toggle("black");
    buttonSpan.innerText = body.classList.contains("black") ? "jasny" : "szary"
})

let links = document.querySelectorAll(".naviLink");

button.addEventListener("click", () => {
  links.forEach((link) => link.classList.toggle("black-second"));
});