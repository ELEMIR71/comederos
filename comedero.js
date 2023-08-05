var connectBtn = document.getElementById('connectBtn');
var encendidoBtn = document.getElementById('encenderComedero');
var apagadoBtn = document.getElementById('apagarComedero');
var segundosLabel = document.getElementById('segundos');
var segundos = 0;
var intervalId = null;

encendidoBtn.addEventListener('click', function() {
  encendidoBtn.classList.add('active');
  apagadoBtn.classList.remove('active');
  startTimer();
});

apagadoBtn.addEventListener('click', function() {
  apagadoBtn.classList.add('active');
  encendidoBtn.classList.remove('active');
  stopTimer();
});

function startTimer() {
  if (intervalId === null) {
    intervalId = setInterval(function() {
      segundos++;
      segundosLabel.textContent = segundos;
    }, 1000);
  }
}

function stopTimer() {
  clearInterval(intervalId);
  intervalId = null;
  segundos = 0;
  segundosLabel.textContent = segundos;
}
