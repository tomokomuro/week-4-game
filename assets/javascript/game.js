$(document).ready(function() {


var = wins: 0;
var = losses: 0;
var = userTotal: 0;

var total = Math.floor((Math.random() * 120) + 19);
var redCrystal = Math.floor((Math.random() * 12) + 1);
var blueCrystal = Math.floor((Math.random() * 12) + 1);
var yellowCrystal = Math.floor((Math.random() * 12) + 1);
var greenCrystal = Math.floor((Math.random() * 12) + 1);
   

$('#red').click(function(){
    userTotal = userTotal + redCrystal;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal); 
    if (userTotal === Random){
        win();
    }
    else if ( userTotal > Random){
        lose();
    }

$('#blue').click(function(){
    userTotal = userTotal + blueCrystal;
    console.log("New userTotal= " + userTotal);
$('#finalTotal').text(userTotal); 
    if (userTotal === Random){
        win();
            }
        else if ( userTotal > Random){
        lose();
         }

$('#yellow').click(function(){
    userTotal = userTotal + yellowCrystal;
     console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal);        
     if (userTotal === Random){
        win();
        }
    else if ( userTotal > Random){
        lose();
        }
$('#green').click(function(){
    userTotal = userTotal + greenCrystal;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal);        
    if (userTotal === Random){
        win();
        }
    else if ( userTotal > Random){
    lose();
        }

}


