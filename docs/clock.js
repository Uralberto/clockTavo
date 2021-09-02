const mark1 = document.getElementById("mark1");
const long1 = mark1.getTotalLength();
console.log(long1);
const mark2 = document.getElementById("mark2");
const long2 = mark2.getTotalLength();
console.log(long2);

setInterval(function () {
  function r(el, deg) {
    el.setAttribute("transform", "rotate(" + deg + " 50 50)");
  }

  var d = new Date();
  r(sec, 6 * d.getSeconds());
  r(min, 6 * d.getMinutes());
  r(hour, 30 * (d.getHours() % 12) + d.getMinutes() / 2);
}, 1000);
