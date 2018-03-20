$(document).ready(function() {

var wins = 0;
var losses = 0;
var totalScore = 0;

var total = Math.floor((Math.random() * 120) + 19);
var redCrystal = Math.floor((Math.random() * 12) + 1);
var blueCrystal = Math.floor((Math.random() * 12) + 1);
var yellowCrystal = Math.floor((Math.random() * 12) + 1);
var greenCrystal = Math.floor((Math.random() * 12) + 1);
   
$('.wins').text(wins);
$('.losses').text(losse);

var restart = function () {
    start = 0;
total = Math.floor((Math.random() * 120) + 19);

}

$('#red').click(function(){
    totalScore = totalScore + redCrystal;
    console.log("New totalScore= " + totalScore);
    $('#userTotal').text(totalScore); 
    if (totalScore === Random){
        win();
    }
    else if ( totalScore > Random){
        lose();
        }
    })

$('#blue').click(function(){
    totalScore = totalScore + blueCrystal;
    console.log("New totalScore= " + totalScore);
$('#userTotal').text(totalScore); 
    if (totalScore === Random){
        win();
            }
        else if ( totalScore > Random){
        lose();
        }
    })
        

$('#yellow').click(function(){
    totalScore = totalScore + yellowCrystal;
     console.log("New totalScore= " + totalScore);
    $('#userTotal').text(totalScore);        
     if (totalScore === Random){
        win();
        }
    else if ( totalScore > Random){
        lose();
        }
    })

$('#green').click(function(){
    totalScore = totalScore + greenCrystal;
    console.log("New totalScore= " + totalScore);
    $('#userTotal').text(totalScore);        
    if (totalScore === Random){
        win();
        }
    else if ( totalScore > Random){
    lose();
        }
    })

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


})
