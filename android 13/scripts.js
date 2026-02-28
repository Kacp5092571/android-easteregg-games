let hourr = 0
function clockgo(){
        hourr = hourr + 15;
        document.getElementById("hi").style.transform = `rotate(${hourr}deg)`;
    if (hourr === 60){
document.getElementById("htmlbodywow").style.backgroundColor = "lightblue"
    }
}
//use backquote thingies for the ${yourvariable here} thing to work