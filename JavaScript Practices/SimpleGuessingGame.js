//create secret number (randomized between 0 and 100)

var secretNumber = Math.floor(Math.random()*101);


while (true) {
    //ask user for guess and converting to number

    var strGuess = prompt("Guess a number:");
    var guess = Number(strGuess);

    //check if guess is right
    if (guess === secretNumber) {
        alert("You are correct!");
        break;
    }

    //otherwise, check if too low
    else if (guess < secretNumber) {
        alert("Your guess is too low.");
    }

    //other it's too high
    else {
        alert("Your guess is too high.");
    }
}