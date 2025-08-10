let count = 0; // Initialize count to 0

function increaseCount() {
  count++; // Incrementar el conteo en 1
  displayCount(); //Mostrar el count
  checkCountValue(); // Verificar el valor del count y mostrar mensajes
}

function displayCount() {
document.getElementById('countDisplay').innerHTML=count; // Mostrar el conteo en el HTML
}

function checkCountValue() {
  if (count === 10) {
    alert("¡Tu publicación de Instagram ganó 10 seguidores! ¡Felicidades!");
  } else if (count === 20) {
    alert("¡Tu publicación de Instagram ganó 20 seguidores! ¡Sigue así!");
  }
}

function resertCount(){
    count = 0;
    alert("El conteo de seguidores ha sido restablecido.");
    document.getElementById('countDisplay').innerHTML=count; 
}