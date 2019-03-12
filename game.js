

let randomLetter = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
let pickedLetter =randomLetter[Math.floor(Math.random()*randomLetter.length)];
let losscounter = 0;
let wincounter = 0;
let guesscounter =10;
let guesses = [];
let guess;


document.getElementById("guesscounter").textContent = guesscounter;
document.getElementById("losscounter").textContent = losscounter;
document.getElementById("wincounter").textContent = wincounter;
document.getElementById("guesses").textContent = guesses;

document.onkeyup = function(event) {
    //continue if have guesses
    if(guesscounter > 0){
        //push guess to array
        guess = event.key;
        guesses.push(guess);
        guesscounter--;
    }//end if

    //win base
    if(guess == pickedLetter){
        wincounter++;
        guesses =[];
        guesscounter = 10;
        document.getElementById("rando").textContent = "Nice! The letter was " + pickedLetter;
        pickedLetter =randomLetter[Math.floor(Math.random()*randomLetter.length)];
    }//end if
    
    else if(guesscounter == 0){
        losscounter++;
        guesses = [];
        guesscounter = 10;
        document.getElementById("rando").textContent = "the correct letter was " + pickedLetter;
        pickedLetter =randomLetter[Math.floor(Math.random()*randomLetter.length)];
    }//end if
    
    
    

document.getElementById("guesscounter").textContent = guesscounter;
document.getElementById("losscounter").textContent = losscounter;
document.getElementById("wincounter").textContent = wincounter;
document.getElementById("guesses").textContent = guesses;
// document.getElementById("cheat").textContent = "cheat code "+pickedLetter;

}





