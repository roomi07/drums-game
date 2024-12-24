function playSound(char){
    switch (char) {
        case "w":
            var tom1 = new Audio("./sounds/tom-1.mp3");
            tom1.play();
            break;
        
        case "a":
            var tom2 = new Audio("./sounds/tom-2.mp3");
            tom2.play();
            break;

        case "s":
            var tom3 = new Audio("./sounds/tom-3.mp3");
            tom3.play();
            break;
        
        case "d":
            var tom4 = new Audio("./sounds/tom-4.mp3");
            tom4.play();
            break;
        
        case "j":
            var snare = new Audio("./sounds/snare.mp3");
            snare.play();
            break;
        
        case "k":
            var snare = new Audio("./sounds/kick-bass.mp3");
            snare.play();
            break;
        
        case "l":
            var snare = new Audio("./sounds/crash.mp3");
            snare.play();
            break;
        
        default:
            break;
    }
};


var drum = document.querySelectorAll(".drum");
for(var i = 0; i < drum.length; i++){
    drum[i].addEventListener("click", function(){
        var char =  this.textContent;
        playSound(char);
        buttonAnimation(char);
    });
}

document.addEventListener("keydown", function(event){
    var char = event.key;
    playSound(char);
    buttonAnimation(char);
});

function buttonAnimation(char){
    var active_button = document.querySelector("." + char);
    active_button.classList.add("pressed");
    setTimeout(function(){ 
        active_button.classList.remove("pressed")
     }, 100);
}
