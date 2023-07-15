var connectBtn = document.getElementById('connectBtn');
var encenderBtn = document.getElementById('encenderComedero');
var segundosLabel = document.getElementById('segundos');
var segundos = 0;
var intervalId = null;

connectBtn.addEventListener('click', function() {
  var redWifiInput = document.getElementById('redWifi');
  var contrasenaInput = document.getElementById('contrasena');
  var redWifi = redWifiInput.value;
  var contrasena = contrasenaInput.value;

  // Aquí puedes realizar la lógica para conectar el ESP8266 a la red Wi-Fi utilizando los valores ingresados
  // Esto puede implicar el uso de bibliotecas o métodos específicos del ESP8266

  // Ejemplo de conexión utilizando la biblioteca WiFi.h
  // WiFi.begin(redWifi, contrasena);

  // Resto del código para la conexión y configuración del ESP8266
});

encenderBtn.addEventListener('click', function() {
  if (encenderBtn.classList.contains('on')) {
    encenderBtn.classList.remove('on');
    encenderBtn.textContent = 'OFF';
    startTimer();
  } else {
    encenderBtn.classList.add('off');
    encenderBtn.textContent = 'ON';
    stopTimer();
  }
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
