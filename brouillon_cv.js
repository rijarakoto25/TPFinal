//Déplacement des véhicules
function deplacement1() {
  var vitesse = document.getElementById("div1");
  var position = 0;
  var id = setInterval(course, 1);
  function course() {
    if (position == canvas.width) {
      position = 0;
    } else {
      position++;

      vitesse.style.left = position + "px";
    }
  }
}
function deplacement2() {
  var vitesse = document.getElementById("div2");
  var position = 0;
  var id = setInterval(course, 5);
  function course() {
    if (position == canvas.width) {
      position = 0;
    } else {
      position++;

      vitesse.style.right = position + "px";
    }
  }
}
function deplacement3() {
  var vitesse = document.getElementById("div3");
  var position = 0;
  var id = setInterval(course, 5);
  function course() {
    if (position == canvas.width) {
      position = 0;
    } else {
      position++;

      vitesse.style.right = position + "px";
    }
  }
}

function deplacement4() {
  var vitesse = document.getElementById("div4");
  var position = 0;
  var id = setInterval(course, 5);
  function course() {
    if (position == canvas.width) {
      position = 0;
    } else {
      position++;

      vitesse.style.left = position + "px";
    }
  }
}
function deplacement5() {
  var vitesse = document.getElementById("velo");
  var position = 0;
  var id = setInterval(course, 10);
  function course() {
    if (position == canvas.width) {
      position = 0;
    } else {
      position++;

      vitesse.style.left = position + "px";
    }
  }
}
//Chrono
var sp = document.getElementsByTagName("span");
var btn_start = document.getElementById("start");
var btn_stop = document.getElementById("stop");
var t;
var ms = 0,
  s = 0,
  mn = 0;

function update_chrono() {
  ms += 1;

  if (ms == 10) {
    ms = 1;
    s += 1;
  }
  if (s == 60) {
    s = 0;
    mn += 1;
  }
  if (mn == 60) {
    mn = 0;
  }
  sp[0].innerHTML = mn + " min";
  sp[1].innerHTML = s + " s";
}
function start() {
  t = setInterval(update_chrono, 100);
  btn_start.disabled = true;
}
function stop() {
  clearInterval(t);
  btn_start.disabled = false;
}
