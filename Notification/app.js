const btn = document.getElementById("btn");
const container = document.getElementById("container");

btn.addEventListener("click", () => {
  createNotification();
});
 
function createNotification() {
  let notify = document.createElement("div");
  notify.classList.add("toast");

  notify.innerText = "Notification is created";

  container.appendChild(notify);

  setTimeout(() => {
    notify.remove();
  }, 3000);
}
