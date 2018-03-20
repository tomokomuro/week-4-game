$(document).ready(function() {
    //Keep on getting an error saying this all Jquery functions are not defined, even though I pasted the source link on my html.

var wins = 0;
var losses = 0;
var totalScore = 0;

var total = Math.floor((Math.random() * 120) + 19);
var redCrystal = Math.floor((Math.random() * 12) + 1);
var blueCrystal = Math.floor((Math.random() * 12) + 1);
var yellowCrystal = Math.floor((Math.random() * 12) + 1);
var greenCrystal = Math.floor((Math.random() * 12) + 1);
// generates random numbers from 19 to 120 for the total score.
// generates random numbers from 1 to 12 for each crystals.
   
$('.wins').text(wins);
$('.losses').text(losse);
$('#randomNumber').text(random);

function myFunction(){
    alert("You won!!");
        wins++; 
        $('#Wins').text(wins);
        reset();
}
function lose(){
    alert ("You lose!!");
      losses++;
      $('#losses').text(losses);
      reset()
}

var restart = function () {
    start = 0;
total = Math.floor((Math.random() * 120) + 19);

}

$('#red').click(function(){
    totalScore = totalScore + redCrystal;
    console.log("New totalScore= " + totalScore);
    $('#userTotal').text(totalScore); 
    if (totalScore === random){
        win();
    }
    else if (totalScore > random){
        lose();
        }
    })
// couldn't get each button to work.
// if the total score equals to the random number generated at the start of the game, user wins.

$('#blue').click(function(){
    totalScore = totalScore + blueCrystal;
    console.log("New totalScore= " + totalScore);
$('#userTotal').text(totalScore); 
    if (totalScore === random){
        win();
            }
        else if (totalScore > Random){
        lose();
        }
    })
        

$('#yellow').click(function(){
    totalScore = totalScore + yellowCrystal;
     console.log("New totalScore= " + totalScore);
    $('#userTotal').text(totalScore);        
     if (totalScore === random){
        win();
        }
    else if (totalScore > random){
        lose();
        }
    })

$('#green').click(function(){
    totalScore = totalScore + greenCrystal;
    console.log("New totalScore= " + totalScore);
    $('#userTotal').text(totalScore);        
    if (totalScore === random){
        win();
        }
    else if (totalScore > random){
    lose();
        }
    })




})
