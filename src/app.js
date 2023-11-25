/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  document.querySelector("#excuse").innerHTML = excusa();
};

////////////
// ARRAYS //
////////////

let quién = [
  "Mi profe de 4Geeks ",
  "Elon Musk ",
  "Mi perro ",
  "Mi antiguo jefe ",
  "Un dragón azul ",
  "El abuelito de Heidi ",
  "Un hámster chino "
];

let acción = [
  "quemó ",
  "destruyó ",
  "hundió en el mar ",
  "se comió ",
  "robó ",
  "hizo un dibujo en "
];

let qué = [
  "mi proyecto final ",
  "mi móvil ",
  "el servidor más grande del mundo ",
  "los calzoncillos sucios de mi novio ",
  "mi Nintendo Switch "
];

let cuándo = [
  "en 1470.",
  "el día de fin de curso.",
  "cuando se acercaba el Ragnarök.",
  "justo en nochevieja.",
  "mientras yo le hacía galletas."
];

////////////////////////////
// FUNCIONES DE SELECCIÓN //
////////////////////////////

function getQuién(quién) {
  let randomIndex = Math.floor(Math.random() * quién.length);
  return quién[randomIndex];
}

function getAcción(acción) {
  let randomIndex = Math.floor(Math.random() * acción.length);
  return acción[randomIndex];
}

function getQué(qué) {
  let randomIndex = Math.floor(Math.random() * qué.length);
  return qué[randomIndex];
}

function getCuándo(cuándo) {
  let randomIndex = Math.floor(Math.random() * cuándo.length);
  return cuándo[randomIndex];
}

///////////////////
// FUNCIÓN FRASE //
///////////////////

function excusa() {
  const elQuién = getQuién(quién);
  const laAcción = getAcción(acción);
  const elQué = getQué(qué);
  const elCuándo = getCuándo(cuándo);

  return elQuién + laAcción + elQué + elCuándo;
}
