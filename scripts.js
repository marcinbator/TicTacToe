var player1 = {
  playing: 1,
  score: 0,
  character: "O",
};
var player2 = {
  playing: 0,
  score: 0,
  character: "X",
};
var field1 = {
  value: "none",
};
var field2 = {
  value: "none",
};
var field3 = {
  value: "none",
};
var field4 = {
  value: "none",
};
var field5 = {
  value: "none",
};
var field6 = {
  value: "none",
};
var field7 = {
  value: "none",
};
var field8 = {
  value: "none",
};
var field9 = {
  value: "none",
};
var who;
var indicator = document.getElementById("roundindicator");
function whoplays() {
  if (player1.playing === 1) {
    who = "Runda gracza 1 (O).";
  } else {
    who = "Runda gracza 2 (X).";
  }
  indicator.textContent = who;
}
function busy(id) {
  if (id.value != "none") {
    return true;
  } else {
    return false;
  }
}
var score1 = document.getElementById("player1score");
var score2 = document.getElementById("player2score");
var winner = " ";
function win() {
  if (
    field1.value === field2.value &&
    field2.value != "none" &&
    field2.value === field3.value
  ) {
    document.getElementById("pole1").classList.add("wincolor");
    document.getElementById("pole2").classList.add("wincolor");
    document.getElementById("pole3").classList.add("wincolor");
    if (field1.value === "o") {
      winner = "Gracz 1!";
      player1.score++;
      score1.textContent = "Liczba wygranych: " + player1.score;
    } else {
      winner = "Gracz 2!";
      player2.score++;
      score2.textContent = "Liczba wygranych: " + player2.score;
    }
    document.getElementById("roundindicator").textContent =
      "Zwycięzca: " + winner;
    setTimeout(remove, 1000);
    setTimeout(nextplayer, 1000);
  } else if (
    field1.value === field4.value &&
    field4.value === field7.value &&
    field1.value != "none"
  ) {
    document.getElementById("pole1").classList.add("wincolor");
    document.getElementById("pole4").classList.add("wincolor");
    document.getElementById("pole7").classList.add("wincolor");
    if (field1.value === "o") {
      winner = "Gracz 1!";
      player1.score++;
      score1.textContent = "Liczba wygranych: " + player1.score;
    } else {
      winner = "Gracz 2!";
      player2.score++;
      score2.textContent = "Liczba wygranych: " + player2.score;
    }
    document.getElementById("roundindicator").textContent =
      "Zwycięzca: " + winner;
    setTimeout(remove, 1000);
    setTimeout(nextplayer, 1000);
  } else if (
    field2.value === field5.value &&
    field5.value === field8.value &&
    field2.value != "none"
  ) {
    document.getElementById("pole2").classList.add("wincolor");
    document.getElementById("pole5").classList.add("wincolor");
    document.getElementById("pole8").classList.add("wincolor");
    if (field2.value === "o") {
      winner = "Gracz 1!";
      player1.score++;
      score1.textContent = "Liczba wygranych: " + player1.score;
    } else {
      winner = "Gracz 2!";
      player2.score++;
      score2.textContent = "Liczba wygranych: " + player2.score;
    }
    document.getElementById("roundindicator").textContent =
      "Zwycięzca: " + winner;
    setTimeout(remove, 1000);
    setTimeout(nextplayer, 1000);
  } else if (
    field3.value === field6.value &&
    field6.value === field9.value &&
    field3.value != "none"
  ) {
    document.getElementById("pole3").classList.add("wincolor");
    document.getElementById("pole6").classList.add("wincolor");
    document.getElementById("pole9").classList.add("wincolor");
    if (field3.value === "o") {
      winner = "Gracz 1!";
      player1.score++;
      score1.textContent = "Liczba wygranych: " + player1.score;
    } else {
      winner = "Gracz 2!";
      player2.score++;
      score2.textContent = "Liczba wygranych: " + player2.score;
    }
    document.getElementById("roundindicator").textContent =
      "Zwycięzca: " + winner;
    setTimeout(remove, 1000);
    setTimeout(nextplayer, 1000);
  } else if (
    field4.value === field6.value &&
    field6.value === field5.value &&
    field4.value != "none"
  ) {
    document.getElementById("pole4").classList.add("wincolor");
    document.getElementById("pole6").classList.add("wincolor");
    document.getElementById("pole5").classList.add("wincolor");
    if (field4.value === "o") {
      winner = "Gracz 1!";
      player1.score++;
      score1.textContent = "Liczba wygranych: " + player1.score;
    } else {
      winner = "Gracz 2!";
      player2.score++;
      score2.textContent = "Liczba wygranych: " + player2.score;
    }
    document.getElementById("roundindicator").textContent =
      "Zwycięzca: " + winner;
    setTimeout(remove, 1000);
    setTimeout(nextplayer, 1000);
  } else if (
    field7.value === field8.value &&
    field8.value === field9.value &&
    field8.value != "none"
  ) {
    document.getElementById("pole7").classList.add("wincolor");
    document.getElementById("pole8").classList.add("wincolor");
    document.getElementById("pole9").classList.add("wincolor");
    if (field8.value === "o") {
      winner = "Gracz 1!";
      player1.score++;
      score1.textContent = "Liczba wygranych: " + player1.score;
    } else {
      winner = "Gracz 2!";
      player2.score++;
      score2.textContent = "Liczba wygranych: " + player2.score;
    }
    document.getElementById("roundindicator").textContent =
      "Zwycięzca: " + winner;
    setTimeout(remove, 1000);
    setTimeout(nextplayer, 1000);
  } else if (
    field1.value === field5.value &&
    field5.value === field9.value &&
    field1.value != "none"
  ) {
    document.getElementById("pole1").classList.add("wincolor");
    document.getElementById("pole5").classList.add("wincolor");
    document.getElementById("pole9").classList.add("wincolor");
    if (field1.value === "o") {
      winner = "Gracz 1!";
      player1.score++;
      score1.textContent = "Liczba wygranych: " + player1.score;
    } else {
      winner = "Gracz 2!";
      player2.score++;
      score2.textContent = "Liczba wygranych: " + player2.score;
    }
    document.getElementById("roundindicator").textContent =
      "Zwycięzca: " + winner;
    setTimeout(remove, 1000);
    setTimeout(nextplayer, 1000);
  } else if (
    field3.value === field5.value &&
    field5.value === field7.value &&
    field3.value != "none"
  ) {
    document.getElementById("pole3").classList.add("wincolor");
    document.getElementById("pole5").classList.add("wincolor");
    document.getElementById("pole7").classList.add("wincolor");
    if (field3.value === "o") {
      winner = "Gracz 1!";
      player1.score++;
      score1.textContent = "Liczba wygranych: " + player1.score;
    } else {
      winner = "Gracz 2!";
      player2.score++;
      score2.textContent = "Liczba wygranych: " + player2.score;
    }
    document.getElementById("roundindicator").textContent =
      "Zwycięzca: " + winner;
    setTimeout(remove, 1000);
    setTimeout(nextplayer, 1000);
  } else {
    draw();
  }
}
function draw() {
  var ile = 0;
  if (field1.value != "none") {
    ile++;
  }
  if (field2.value != "none") {
    ile++;
  }
  if (field3.value != "none") {
    ile++;
  }
  if (field4.value != "none") {
    ile++;
  }
  if (field5.value != "none") {
    ile++;
  }
  if (field6.value != "none") {
    ile++;
  }
  if (field7.value != "none") {
    ile++;
  }
  if (field8.value != "none") {
    ile++;
  }
  if (field9.value != "none") {
    ile++;
  }
  if (ile == 9) {
    document.getElementById("roundindicator").textContent = "Remis!";
    setTimeout(remove, 1000);
    setTimeout(nextplayer, 1000);
  }
}
function remove() {
  field1.value = "none";
  field2.value = "none";
  field3.value = "none";
  field4.value = "none";
  field5.value = "none";
  field6.value = "none";
  field7.value = "none";
  field8.value = "none";
  field9.value = "none";
  for (i = 1; i <= 9; i++) {
    document.getElementById("pole" + i).innerHTML = " ";
    document.getElementById("pole" + i).classList.remove("wincolor");
  }
}
function nextplayer() {
  var lp = Math.round(Math.random());
  if (lp === 1) {
    player1.playing = 1;
    player2.playing = 0;
  } else {
    player2.playing = 1;
    player1.playing = 0;
  }
  whoplays();
}
var p1 = document.getElementById("pole1");
p1.addEventListener("click", fieldset1);
function fieldset1() {
  if (!busy(field1)) {
    if (player1.playing === 1) {
      p1.innerHTML = player1.character;
      player1.playing = 0;
      player2.playing = 1;
      field1.value = "o";
      s;
    } else {
      p1.innerHTML = player2.character;
      player2.playing = 0;
      player1.playing = 1;
      field1.value = "x";
    }
    whoplays();
    win();
  }
}
var p2 = document.getElementById("pole2");
p2.addEventListener("click", fieldset2);
function fieldset2() {
  if (!busy(field2)) {
    if (player1.playing === 1) {
      p2.innerHTML = player1.character;
      player1.playing = 0;
      player2.playing = 1;
      field2.value = "o";
    } else {
      p2.innerHTML = player2.character;
      player2.playing = 0;
      player1.playing = 1;
      field2.value = "x";
    }
    whoplays();
    win();
  }
}
var p3 = document.getElementById("pole3");
p3.addEventListener("click", fieldset3);
function fieldset3() {
  if (!busy(field3)) {
    if (player1.playing === 1) {
      p3.innerHTML = player1.character;
      player1.playing = 0;
      player2.playing = 1;
      field3.value = "o";
    } else {
      p3.innerHTML = player2.character;
      player2.playing = 0;
      player1.playing = 1;
      field3.value = "x";
    }
    whoplays();
    win();
  }
}
var p4 = document.getElementById("pole4");
p4.addEventListener("click", fieldset4);
function fieldset4() {
  if (!busy(field4)) {
    if (player1.playing === 1) {
      p4.innerHTML = player1.character;
      player1.playing = 0;
      player2.playing = 1;
      field4.value = "o";
    } else {
      p4.innerHTML = player2.character;
      player2.playing = 0;
      player1.playing = 1;
      field4.value = "x";
    }
    whoplays();
    win();
  }
}
var p5 = document.getElementById("pole5");
p5.addEventListener("click", fieldset5);
function fieldset5() {
  if (!busy(field5)) {
    if (player1.playing === 1) {
      p5.innerHTML = player1.character;
      player1.playing = 0;
      player2.playing = 1;
      field5.value = "o";
    } else {
      p5.innerHTML = player2.character;
      player2.playing = 0;
      player1.playing = 1;
      field5.value = "x";
    }
    whoplays();
    win();
  }
}
var p6 = document.getElementById("pole6");
p6.addEventListener("click", fieldset6);
function fieldset6() {
  if (!busy(field6)) {
    if (player1.playing === 1) {
      p6.innerHTML = player1.character;
      player1.playing = 0;
      player2.playing = 1;
      field6.value = "o";
    } else {
      p6.innerHTML = player2.character;
      player2.playing = 0;
      player1.playing = 1;
      field6.value = "x";
    }
    whoplays();
    win();
  }
}
var p7 = document.getElementById("pole7");
p7.addEventListener("click", fieldset7);
function fieldset7() {
  if (!busy(field7)) {
    if (player1.playing === 1) {
      p7.innerHTML = player1.character;
      player1.playing = 0;
      player2.playing = 1;
      field7.value = "o";
    } else {
      p7.innerHTML = player2.character;
      player2.playing = 0;
      player1.playing = 1;
      field7.value = "x";
    }
    whoplays();
    win();
  }
}
var p8 = document.getElementById("pole8");
p8.addEventListener("click", fieldset8);
function fieldset8() {
  if (!busy(field8)) {
    if (player1.playing === 1) {
      p8.innerHTML = player1.character;
      player1.playing = 0;
      player2.playing = 1;
      field8.value = "o";
    } else {
      p8.innerHTML = player2.character;
      player2.playing = 0;
      player1.playing = 1;
      field8.value = "x";
    }
    whoplays();
    win();
  }
}
var p9 = document.getElementById("pole9");
p9.addEventListener("click", fieldset9);
function fieldset9() {
  if (!busy(field9)) {
    if (player1.playing === 1) {
      p9.innerHTML = player1.character;
      player1.playing = 0;
      player2.playing = 1;
      field9.value = "o";
    } else {
      p9.innerHTML = player2.character;
      player2.playing = 0;
      player1.playing = 1;
      field9.value = "x";
    }
    whoplays();
    win();
  }
}
