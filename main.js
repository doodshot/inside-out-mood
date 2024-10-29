// script.js

// Timer di 24 ore
var time = 1; // secondi in 24 ore

function startTimer() {
  const timerElement = document.getElementById("timer");
  setInterval(() => {
    const hours = 0 + Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    timerElement.textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    time++;
  }, 1000);
}

// Avvia il timer all'apertura della pagina
window.onload = startTimer;

// Funzione per mostrare il mood selezionato nella pagina
function selectMood(mood, emoji) {
  const moodElement = document.getElementById("selected-mood");
  moodElement.textContent = `You selected: ${emoji} ${mood}`;
}
