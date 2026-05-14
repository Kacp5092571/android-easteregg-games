let rotatee = 6
function spinn(){
    while(rotatee < 361){
       setTimeout(function thing(){
           document.getElementById("kspin").style.transform = `rotate(${rotatee}deg)`   
        rotatee = rotatee + 6
       }, 1000);
    }
    alert('*insert kitkat image here*')
}