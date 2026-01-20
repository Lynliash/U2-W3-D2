const submitButton = document.getElementById("invia");
const resetButton = document.getElementById("resetta");

const nomeSalvato = "Username";

submitButton.addEventListener("click", function (e) {
  const nameInput = document.getElementById("name-text").value;
  if (nameInput !== "") {
    localStorage.setItem(nomeSalvato, nameInput);
  }

  const toast = document.getElementById("tostino");

  if (localStorage.getItem(nomeSalvato) !== null) {
    toast.classList.add("show");
  } else {
    toast.classList.remove("show");
  }
});

resetButton.addEventListener("click", function (e) {
  const nameInput = document.getElementById("name-text");
  const toast = document.getElementById("tostino");
  localStorage.removeItem(nomeSalvato);
  toast.classList.remove("show");
});
