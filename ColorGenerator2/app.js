const btn = document.getElementById("btn");
const showrgb = document.getElementById("rgb");

btn.addEventListener("click", () => {
  colorPicker1();
  colorPicker2();
  colorPicker3();
  const rgb = `rgb(${colorPicker1()},${colorPicker2()},${colorPicker3()})`;
  document.body.style.backgroundColor = rgb;
  showrgb.innerHTML = rgb
});

function colorPicker1() {
  return randomColor();
}
function colorPicker2() {
  return randomColor();
}
function colorPicker3() {
  return randomColor();
}
function randomColor() {
  return Math.floor(Math.random() * 255);
}
