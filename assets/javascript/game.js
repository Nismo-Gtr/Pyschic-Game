    var wins = 0; 
    var losses = 0;
    var guessesRemaining = 10;
    var guessesSoFar = "";
    var randomLetter = getRandomLetter();

    document.getElementById("wins").innerHTML = wins;
    document.getElementById("losses").innerHTML = losses;
    document.getElementById("guessesLeft").innerHTML = guessesRemaining;
    document.getElementById("guessesSoFar").innerHTML = guessesSoFar;
                    
    document.addEventListener("keyup",function(guess){
       var userGuess = String.fromCharCode(guess.keyCode);
       guessesRemaining = guessesRemaining - 1;

         if (guessesSoFar !== ""){
            guessesSoFar = guessesSoFar + ", " + userGuess.toLowerCase();
        }
        else {
            guessesSoFar = userGuess.toLowerCase();
        }

        if (userGuess.toLowerCase() === randomLetter){
            wins = wins + 1;
            guessesRemaining = 10;
            randomLetter = getRandomLetter();
            guessesSoFar ="";
        } else if (guessesRemaining === 0){
            losses = losses + 1;
            guessesRemaining = 10;
            randomLetter = getRandomLetter();
            guessesSoFar = "";
            
        }
               
        document.getElementById("wins").innerHTML = wins;
        document.getElementById("losses").innerHTML = losses;
        document.getElementById("guessesLeft").innerHTML = guessesRemaining;
        document.getElementById("guessesSoFar").innerHTML = guessesSoFar;

    });

function getRandomLetter (){
    var possibleLetters = "abcdefghijklmnopqrstuvwxzy"
    return possibleLetters.charAt(Math.floor(Math.random()*possibleLetters.length));
}
