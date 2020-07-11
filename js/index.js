var buttonPlay = document.querySelector(".btn");

buttonPlay.addEventListener("click", function() {
  var randomNumber1 = Math.floor(Math.random() * 6) + 1;
  var randomImageSources = "images/dice" + randomNumber1 + ".png";
  var images1 = document.querySelectorAll("img")[0].setAttribute("src", randomImageSources);

  var randomNumber2 = Math.floor(Math.random() * 6) + 1;
  var randomImageSources = "images/dice" + randomNumber2 + ".png";
  var images2 = document.querySelectorAll("img")[1].setAttribute("src", randomImageSources);

  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
  }

  else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
  }

  else {
    document.querySelector("h1").innerHTML = "Draw!";
  }
})
