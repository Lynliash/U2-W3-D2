const contatore = document.getElementById("contatore");

let counter;

const contaSecondi = function () {
  let seconds = sessionStorage.getItem("counter");
  seconds = Number(seconds);
  contatore.innerText = seconds;
  setInterval(() => {
    seconds++;
    sessionStorage.setItem("counter", seconds);
    contatore.innerText = seconds;
  }, 1000);
};

contaSecondi();
