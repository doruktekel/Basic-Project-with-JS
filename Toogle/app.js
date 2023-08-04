const toggle = document.getElementById("toggle");
const label = document.querySelector("label");

toggle.addEventListener("change", () => {
  document.body.classList.toggle("active");
  label.classList.toggle("active");
});
