const mark1 = document.getElementById("mark1");
const long1 = mark1.getTotalLength();
console.log(long1);
const mark2 = document.getElementById("mark2");
const long2 = mark2.getTotalLength();
console.log(long2);
const cohetes = document.getElementById("cohetes");
const leyenda = document.getElementById("leyenda");
const clockDay = document.getElementById("dia");
console.log(clockDay);
const contador = document.getElementById("contador");

setInterval(function () {
  function r(el, deg) {
    el.setAttribute("transform", "rotate(" + deg + " 50 50)");
  }

  var d = new Date();
  r(sec, 6 * d.getSeconds());
  r(min, 6 * d.getMinutes());
  r(hour, 30 * (d.getHours() % 12) + d.getMinutes() / 2);
}, 1000);

let fechaCumple = new Date("2021/9/25");
let fechaActual = new Date();
let mes = fechaActual.getMonth() + 1;
let dia = fechaActual.getDate();
let nombreMes = fechaActual.toDateString().substring(4, 7);
console.log(nombreMes);

let c = mes === 9 && dia === 25;
console.log(c);

if (c) {
  cohetes.style.opacity = 1;
  leyenda.style.opacity = 1;
}

let contentClockDay = clockDay.textContent;

clockDay.textContent = dia + " " + nombreMes;

let diasFaltantes = 25 - dia + " días";
console.log(diasFaltantes);

contador.textContent = contador.textContent + diasFaltantes;

let resta = fechaCumple - fechaActual;
console.log(resta / 1000 / 60 / 60 / 24);

if (resta < 0) {
  contador.style.display = "none";
}
