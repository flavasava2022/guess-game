'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
document.querySelector(".again").addEventListener("click", function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector(".score").textContent = score;
    document.querySelector(".message").textContent = "Start guessing...";
    document.querySelector(".number").textContent = "?";
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".number").style.width = "15rem"
})


document.querySelector(".check").addEventListener("click", function () {
    let guess = Number(document.querySelector(".guess").value);
    console.log(guess, typeof guess);
    
    // when there is no input
    if (!guess) {
        document.querySelector(".message").textContent = "No Number";

        // when player wins
    } else if (guess === secretNumber) {
        document.querySelector(".message").textContent = "Congrats";
        document.querySelector(".number").textContent = secretNumber;
        document.querySelector("body").style.backgroundColor = "#60b347";
        document.querySelector(".number").style.width = "30rem"
        if (score > document.querySelector(".highscore").textContent) {
        document.querySelector(".highscore").textContent = score
    }
        // when huess is too high or too low
    } else if (guess !== secretNumber) {
        if (score > 1) {
            document.querySelector(".message").textContent = guess > secretNumber ?"Too High":" Too Low" ;
            score--;
            document.querySelector(".score").textContent = score;
        } else {
            document.querySelector(".message").textContent = "You Lost The Game";
            document.querySelector(".score").textContent = 0;
        }
    }
})

