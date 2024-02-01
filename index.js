var h1 = document.querySelector("body h1");

// Play One
var playOne = Math.floor((Math.random() * 6) + 1);
var img1 = document.getElementsByClassName("img1");
img1[0].getAttribute("src");

var newImg1Attribute = 'images/dice' + playOne + '.png';
img1[0].setAttribute("src", newImg1Attribute);


// PlayTwo
var playTwo = Math.floor((Math.random() * 6) + 1);
var img2 = document.getElementsByClassName("img2");
img2[0].getAttribute("src");

var newImg2Attribute = 'images/dice' + playTwo + '.png';
img2[0].setAttribute("src", newImg2Attribute);


//Let's compare the dice values
if (playOne > playTwo) {
  // var h1 = document.querySelector("body h1");
  h1.textContent="Play 1 wins"
  console.log("Play One is the winner");
} else if (playOne < playTwo) {
  // var h1 = document.querySelector("body h1");
  h1.textContent="Play 2 wins"
  console.log("Play Two is the winner");
} else  {
  // var h1 = document.querySelector("body h1");
  h1.textContent="Play Again"
  console.log("There is no winner");
}

