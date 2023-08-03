const show = document.getElementById("btn-show");
const hide = document.getElementById("btn-hide");
const contclick = document.getElementById("container-click");

show.addEventListener("click", () => {
  contclick.style.display = "grid";
});

hide.addEventListener("click", () => {
  contclick.style.display = "none";
});
