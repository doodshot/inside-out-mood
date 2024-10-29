// script.js
// Timer di 24 ore
var time = 1; // secondi in 24 ore
var isClicked = false;

function startTimer() {
  const timerElement = document.getElementById("timer");
  setInterval(() => {
    const hours = 0 + Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    timerElement.textContent = `${String(hours).padStart(2, "0")}:${String(
      minutes
    ).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
    time++;
  }, 1000);
}

// Avvia il timer all'apertura della pagina

var moodButton1 = document.getElementById("moodButton1");
var moodButton2 = document.getElementById("moodButton2");
var moodButton3 = document.getElementById("moodButton3");
var moodButton4 = document.getElementById("moodButton4");
var moodButton5 = document.getElementById("moodButton5");

window.onload = startTimer();

moodButton1.addEventListener("click", () => {
  time = 0; // Reset the timer to 0 when the button is clicked
});
moodButton2.addEventListener("click", () => {
  time = 0; // Reset the timer to 0 when the button is clicked
});
moodButton3.addEventListener("click", () => {
  time = 0; // Reset the timer to 0 when the button is clicked
});
moodButton4.addEventListener("click", () => {
  time = 0; // Reset the timer to 0 when the button is clicked
});
moodButton5.addEventListener("click", () => {
  time = 0; // Reset the timer to 0 when the button is clicked
});

// Funzione per mostrare il mood selezionato nella pagina
function selectMood(mood, emoji) {
  const moodElement = document.getElementById("selected-mood");
  moodElement.textContent = `You selected: ${emoji} ${mood}`;
}
