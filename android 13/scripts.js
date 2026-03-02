let hourr = 0
function clockgo(){
        hourr = hourr + 15;
        document.getElementById("imgclock").style.transform = `rotate(${hourr}deg)`;
    if (hourr === 90){
document.getElementById("htmlbodywow").style.backgroundColor = "skyblue"
    }
}
//use backquote thingies for the ${yourvariable here} thing to work ig cuz it just does