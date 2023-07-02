let btn = document.getElementById("btn");
let hex = document.getElementById("hexcode");
let color;

function randomColor() {
  color = "#";
  let hexcode = "0123456789ABCDEF";

  for (let index = 0; index < 6; index++) {
    color = color + hexcode[Math.floor(Math.random() * 16)];
  }
  return color;
}

btn.addEventListener("click", function () {
  document.body.style.backgroundColor = randomColor();
  hex.innerHTML = color;
});
