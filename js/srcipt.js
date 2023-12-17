{const welcome = () => {
  console.log("Hello, nice to have you here! 😁");
}

const toggleBackground = () => {
  const buttonSpan = document.querySelector(".buttonSpan");
  const body = document.querySelector(".body");
  // Toggle body to black  
  body.classList.toggle("dark");
  buttonSpan.innerText = body.classList.contains("dark") ? "black" : "gray";
};

const removeImage = () => {
  const image = document.querySelector(".image");
  const js__imageButton = document.querySelector(".js__imageButton");
  image.remove();
  js__imageButton.remove();
};

const init = () => {
  welcome();
  let button = document.querySelector(".button");
  let js__imageButton = document.querySelector(".js__imageButton"); // Declare js__imageButton

  js__imageButton.addEventListener("click", removeImage);
  button.addEventListener("click", toggleBackground);
};

init(); // Remove extra braces and move it outside the function
};