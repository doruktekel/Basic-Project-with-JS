const ratingEls = document.querySelectorAll(".rating");

const btnEl = document.getElementById("btn");
const containerEl = document.getElementById("container");
let selectedRating = "";

ratingEls.forEach((ratingEl) => {
  ratingEl.addEventListener("click", (event) => {
    removeActive();
    selectedRating =
      event.target.innerText || event.target.parentNode.innerText;
    event.target.classList.add("active");
    event.target.parentNode.classList.add("active");
  });
});

btnEl.addEventListener("click", () => {
  if (selectedRating !== "") {
    containerEl.innerHTML = `
       <h1>Thank You !</h1>
       <br>
       <br>
       <strong>Feedback = ${selectedRating}</strong>
       <br>
       <br>
       <h3>We'll use your feedback to improve our customer support.</h3>
       `;
  }
});

function removeActive() {
  ratingEls.forEach((ratingEl) => {
    ratingEl.classList.remove("active");
  });
}
