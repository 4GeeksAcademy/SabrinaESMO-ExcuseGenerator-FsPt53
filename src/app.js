/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  document.querySelector("#excuse").innerHTML = excuse;
};

let who = [
  "Mi profe de 4Geeks ",
  "Elon Musk ",
  "Mi perro ",
  "Mi antiguo jefe ",
  "Un dragón azul ",
  "El abuelito de Heidi ",
  "Un hámster chino "
];

let action = [
  "quemó ",
  "destruyó ",
  "hundió en el mar ",
  "se comió ",
  "robó ",
  "hizo un dibujo en "
];

let what = [
  "mi proyecto final ",
  "mi móvil ",
  "el servidor más grande del mundo ",
  "los calzoncillos sucios de mi novio ",
  "mi Nintendo Switch "
];

let when = [
  "en 1470.",
  "el día de fin de curso.",
  "cuando se acercaba el Ragnarök.",
  "justo en nochevieja.",
  "mientras yo le hacía galletas."
];

function getItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}

const excuse = getItem(who) + getItem(action) + getItem(what) + getItem(when);
