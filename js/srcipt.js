console.log("Cześć fajnie, że jesteś! 😁");
let button = document.querySelector(".button");
let body = document.querySelector(".body");
let js__imageButton = document.querySelector(".js__imageButton");
let buttonSpan = document.querySelector(".buttonSpan");
let image = document.querySelector(".image");
let image__container = document.querySelector(".image__container");

js__imageButton.addEventListener("click", () => {
  if (js__imageButton.innerText === "Usuń zdjęcie") {
    // Usuń zdjęcie
    if (image) {
      image.remove();
    }
    // Przełącz tekst na przycisku
    js__imageButton.innerText = "Dodaj zdjęcie";
  } else {
    // Dodaj zdjęcie
    let clonedImage = image.cloneNode(true);
    image__container.appendChild(clonedImage);
    // Przełącz tekst na przycisku
    js__imageButton.innerText = "Usuń zdjęcie";
  }
});

button.addEventListener("click", () => {
  body.classList.toggle("black");
  buttonSpan.innerText = body.classList.contains("black") ? "jasny" : "szary";
});

let links = document.querySelectorAll(".naviLink");

button.addEventListener("click", () => {
  links.forEach((link) => link.classList.toggle("black-second"));
});
