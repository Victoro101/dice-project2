
    var rollIcon=document.querySelector("#roll");
rollIcon.addEventListener("click",function () {
    diceProblem();
})

function diceProblem() {

var randomNumber1 = Math.floor(Math.random() * 6) + 1;
console.log(randomNumber1);

var randomDiceImage = "images/dice" + randomNumber1 + ".png";
console.log(randomDiceImage);

document.querySelectorAll("img")[0].setAttribute("src", randomDiceImage);
//for second player
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
console.log(randomNumber2);

var randomDiceImage2 = "images/dice" + randomNumber2 + ".png";
console.log(randomDiceImage2);

document.querySelectorAll("img")[1].setAttribute("src", randomDiceImage2);
if (randomNumber1 > randomNumber2) {
    document.querySelector("div.container h1").textContent = "Player1 wins";
}
else if (randomNumber1 < randomNumber2) {
    document.querySelector("div.container h1").textContent = "player2 wins";
}
else {
    document.querySelector("div.container h1").textContent = "it is draw";
}

}






// var images = Array(
//     "dice1.png",
//     "dice2.png",
//     "dice3.png",
//     "dice4.png",
//     "dice5.png",
//     "dice6.png"
// );
// var imageRandom = Math.floor(Math.random() * images.length) + 1;;
// document.getElementsByTagName("img").src = images[imageRandom];
// console.log(imageRandom);