console.log("Cześć fajnie, że jesteś! 😁");
let button = document.querySelector(".button");
let body = document.querySelector(".body");
let js__imageButton = document.querySelector(".js__imageButton");
let buttonSpan = document.querySelector(".buttonSpan");
let image = document.querySelector(".image");
let image__container = document.querySelector(".image__container");

js__imageButton.addEventListener("click", () => {
  image.remove();
  js__imageButton.remove();
})

button.addEventListener("click", () => {
// Toggle body on black  
  body.classList.toggle("dark");
  buttonSpan.innerText = body.classList.contains("dark") ? "czarny" : "szary";
});

