var getRandom = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

let button1 = getRandom(1, 12);
let button2 = getRandom(1, 12);
let button3 = getRandom(1, 12);
let button4 = getRandom(1, 12);
let total = 0;
let wins = 0;
let lose = 0;

var x = getRandom(19, 120);
document.getElementById("RandomNumber").innerHTML = x;
function win() {
  if (total == x) {
    wins++;
  }
}

function lost() {
  if (total > x) {
    lose++;
    let randomNumber = getRandom(19, 120);
    $("#RandomNumber").text(randomNumber);
    $("#currentScore").text(0);
    total = 0;
  }
}

function displayScore() {
  $("#currentScore").text(total);
  $("#wins").text(wins);
  $("#loses").text(lose);
}
displayScore();
$("#button1").on("click", function() {
  total = total + button1;
  win();
  lost();
  displayScore();
  console.log(button1);
});

$("#button2").on("click", function() {
  total = total + button2;
  win();
  lost();
  displayScore();
  console.log(button2);
});

$("#button3").on("click", function() {
  total = total + button3;
  win();
  lost();
  displayScore();
  console.log(button3);
});

$("#button4").on("click", function() {
  total = total + button4;
  win();
  lost();
  console.log(button4);
});
