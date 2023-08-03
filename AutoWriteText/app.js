const container = document.getElementById("container");
const yazi = document.querySelector("p");
const parag = "I'm a front-end developer";
let index = 0;

function text() {
  yazi.innerHTML = parag.slice(0, index);
  index++;
  if (index >= parag.length+1) index = 0;
}

setInterval(() => {
  text();
}, 100);
