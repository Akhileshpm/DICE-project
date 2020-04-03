var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6
var randomDiceImage = "dice" + randomNumber1 + ".png";
var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png
document.querySelectorAll("img")[0].setAttribute("src", randomImageSource);
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage = "dice" + randomNumber2 + ".png";
var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "🚩 Play 2 Wins!";
} else if (randomNumber2 === randomNumber1) {
  document.querySelector("h1").innerHTML = "DRAW!";
}
