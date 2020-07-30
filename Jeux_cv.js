let gameStarted = false;

//---------------------------------------Présentation-------------------------------------------
function presentation() {
  document.getElementById("personnageKo").style.display = "none";
  alert(
    "Connaissez-vous l'expression traversez et vous trouverez un travail?..." +
      " Aidez moi à traverser pour que je puisse vous présenter mon CV" +
      " Attention! vous n'aurez que 30secondes pour traverser. Bonne chance!"
  );
}

//Start Game
function startGame() {
  if (gameStarted) {
    return;
  }
  gameStarted = true;
  deplacement();
  on();
  traverser();
  detectCollision();
  gagner();
  detectArriver();
}

//Déplacement des véhicules
function deplacement() {
  //Code simplifié: voir 'brouillon_cv.js' pour les détails
  const vehicles = [
    {
      item: document.getElementById("div1"),
      speed: 1,
      position: 0,
      style: "left",
    },
    {
      item: document.getElementById("div2"),
      speed: 2,
      position: 0,
      style: "right",
    },
    {
      item: document.getElementById("div3"),
      speed: 1,
      position: 0,
      style: "right",
    },
    {
      item: document.getElementById("div4"),
      speed: 2,
      position: 0,
      style: "left",
    },
    {
      item: document.getElementById("velo"),
      speed: 4,
      position: 0,
      style: "left",
    },
  ];
  let intervalTimer = 0;
  setInterval(() => {
    intervalTimer++;
    vehicles.map((vehicle) => {
      if (intervalTimer % vehicle.speed > 0) {
        return;
      }
      if (vehicle.position == window.innerWidth) {
        vehicle.position = 0;
      } else {
        vehicle.position++;

        vehicle.item.style[vehicle.style] = vehicle.position + "px";
      }
    });
  }, 1);
}
//Les Collisions

function contact(l1, l2) {
  // cette fonction est encore fausse, il faut revoir les calcules
  return l1.top - l2.top > 0 && l1.left - l2.left == 0 ? true : false;
}

function detectCollision() {
  //Récupération des propriétés des véhicules et du personnage
  //const vehicles = [$("#div1"), $("#div2"), $("#div3"), $("#div4"), $("#velo")];

  setInterval(() => {
    const vehicles = [
      $("#div1"),
      $("#div2"),
      $("#div3"),
      $("#div4"),
      $("#velo"),
    ];
    vehicles.map((vehicle) => {
      const userPosition = $("#personnage").position();
      if (contact(vehicle.position(), userPosition)) {
        restart();
      }
    });
  }, 10);
}

function contact2(a1, a2) {
  // cette fonction est encore fausse, il faut revoir les calcules
  return a1.top - a2.top > 0 ? true : false;
}

function detectArriver() {
  //Récupération des propriétés de la ligne d'arriver et du personnage
  //const vehicles = $("#div1");

  setInterval(() => {
    const arriver = $(".ligneArriver");
    arriver.map((arrive) => {
      const userPosition = $("#personnage").position();
      if (contact2(arrive.position(), userPosition)) {
        alert("Gagné!!!");
        window.open(mon_cv.html); //ouverture du fichier htlm contenant le CV en cas de victoire;
      }
    });
  }, 10);
}
function restart() {
  //Relance du jeu en cas défaite
  const reloadGame = window.location.reload(false);
  if (confirm("----PERDU!----Voulez-vous reprendre la partie?")) {
    reloadGame(true);
  } else {
    window.close();
  }
}

//Déplacement du personnage
function traverser() {
  $(document).keydown(function (e) {
    switch (e.which) {
      case 37: //Gauche
        $("#personnage").finish().animate({
          left: "-=5",
        });
        break;
      case 38: //Haut
        $("#personnage").finish().animate({
          top: "-=5",
        });
        break;
      case 39: //droite
        $("#personnage").finish().animate({
          left: "+=5",
        });
        break;
      case 40: //Bas
        $("#personnage").finish().animate({
          top: "+=5",
        });
        break;
    }
  });
}

//Chrono
var sp = document.getElementsByClassName("span");
var btn_stop = document.getElementById("stop");
var t;
var ms = 0,
  s = 0,
  mn = 0;

function on() {
  t = setInterval(update_chrono, 100);
}

function update_chrono() {
  ms += 1;

  if (ms == 10) {
    ms = 1;
    s += 1;
  }
  if (s > 9) {
    document.querySelector("body > div.chronometre").style.backgroundColor =
      "orange";
  }
  if (s > 19) {
    document.querySelector("body > div.chronometre").style.backgroundColor =
      "red";
  }
  if (s == 31) {
    restart();
  }
  sp[0].innerHTML = s + " s";
}

function stop() {
  //Boutton Quitter
  clearInterval(t);
  refresh();
  btn_start.disabled = false;
}
function refresh() {
  //Pour relancer ou quitter le jeu
  const reloadGame = window.location.reload(false);
  if (confirm("Voulez-vous vraiment quitter le jeu? ")) {
    window.close();
  } else {
    reloadGame(true);
  }
}
