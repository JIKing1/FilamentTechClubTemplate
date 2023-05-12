
function changeColor() {
   var currentColor = document.getElementById("JamesRocks").style.color;
   var newColor = selectNewColor(currentColor);
    document.getElementById("JamesRocks").style.color = newColor;

}


function selectNewColor(currentColor) {
    var newColor = "";

    if (currentColor === "") {
        newColor = "purple";
    } else if (currentColor === "purple"){
        newColor = "red";
    } else if (currentColor === "red") {
        newColor = "olive";
    } else if (currentColor === "olive") {
        newColor = "";
    }


    return newColor;


}