function diceRoll() {
  var dice = Math.ceil(Math.random()*6);
  document.getElementById("roll").innerHTML = dice;
}
