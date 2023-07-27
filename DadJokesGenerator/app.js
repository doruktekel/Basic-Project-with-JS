const btnEl = document.getElementById("btn");
const jokeEl = document.getElementById("joke");

btnEl.addEventListener("click", getJoke);

const apiKey = "3KvJH+jZcBwTTZnE/Z5eGw==85wcgH1oJfKAwzDy";
const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

const options = {
  method: "GET",
  headers: { "X-Api-Key": apiKey },
};

async function getJoke() {
  try {
    jokeEl.innerText = "Updating...";
    
    btnEl.disabled = true;
    btnEl.innerText = "Loading...";

    const response = await fetch(apiURL, options);
    const data = await response.json();

    btnEl.disabled = false;
    btnEl.innerText = "Tell me a joke";

    jokeEl.innerText = data[0].joke;
  } catch (error) {
    jokeEl.innerText = "An Error Happened , Try Again Later";
    btnEl.disabled = false;
    btnEl.innerText = "Tell me a joke";

    console.log(error);
  }
}



