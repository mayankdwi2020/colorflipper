const flip = document.getElementById("change");
const body = document.getElementById("body");
const heading = document.getElementById("heading");
flip.addEventListener("click", () => {
  const mathRandom = () => Math.floor(Math.random(1) * 256);
  const rgbValue = `rgb(${mathRandom()}, ${mathRandom()}, ${mathRandom()})`;
  body.style.backgroundColor = `${rgbValue}`;
  heading.innerText = `Background Color: ${rgbValue}`;
});
