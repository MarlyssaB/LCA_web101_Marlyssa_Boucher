var gameMarker = "x"

function changeMarkerToX(){
    console.log("The x button was clicked!");
 }
function changeMarkerToO(){
    console.log("The x button was clicked!");
 }
 var xturn=true;
 function placemarker(id){
    var thisSquare = document.getElementById(id); //thisSquare is the clicked/selected square
    if (xturn){
        thisSquare.innerHTML = "X";
    }
    else{
        thisSquare.innerHTML = "O";
    }
    xturn = !xturn;
 }