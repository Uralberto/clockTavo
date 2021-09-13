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

let fecha = new Date();
let mes = fecha.getMonth() + 1;
let dia = fecha.getDate();

let c = mes === 9 && dia === 25;
console.log(c);

if (c) {
  cohetes.style.opacity = 1;
  leyenda.style.opacity = 1;
}

let contentClockDay = clockDay.textContent;

clockDay.textContent = dia;

let diasFaltantes = 25 - dia + " días";
console.log(diasFaltantes);

contador.textContent = contador.textContent + diasFaltantes;

let d = mes === 9 && dia === 26;

if (d) {
  contador.style.display = "none";
}
