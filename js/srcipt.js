console.log("Cześć fajnie, że jesteś! 😁");
let button = document.querySelector(".button");
let body = document.querySelector(".body");
let js__imageButton = document.querySelector(".js__imageButton");
let buttonSpan = document.querySelector(".buttonSpan");
let image = document.querySelector(".image");
let image__container = document.querySelector(".image__container");

js__imageButton.addEventListener("click", () => {
  if (js__imageButton.innerText === "Usuń zdjęcie") {
    // Remove image
    if (image) {
      image.remove();
    }
    // Toggle text on button 
    js__imageButton.innerText = "Dodaj zdjęcie";
  } else {
    // Add image 
    let clonedImage = image.cloneNode(true);
    image__container.appendChild(clonedImage);
    // Toggle text on button
    js__imageButton.innerText = "Usuń zdjęcie";
  }
});

button.addEventListener("click", () => {
// Toggle body on black  
  body.classList.toggle("black");
  buttonSpan.innerText = body.classList.contains("black") ? "jasny" : "szary";
});

let links = document.querySelectorAll(".naviLink");

button.addEventListener("click", () => {
  links.forEach((link) => link.classList.toggle("darkTheme"));
});
