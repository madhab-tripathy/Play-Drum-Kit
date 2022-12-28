var drumkitButton=document.querySelectorAll(".drum").length;

//var tom1 = new Audio('sounds/tom-1.mp3');
//   tom1.play(); 

// function Audio (filelLocation){
//     this.filelLocation=filelLocation;
//     this.play=function(){
        //Tap into the audio hardware
        // check the file at the filelocation exists
        // check the file at the filelocation is sound file
        // play the file at fileLocation
//     }    
// }


// ADD mouse event
for(var i=0; i<drumkitButton; i++){
    //anonymouse function
    
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){  
        
        var buttonInnerHTML=this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
       
    });
    
   
}
 //Add keyboard Event
document.addEventListener("keydown",function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});


function makeSound(key){

    switch (key) 
    {
        case "w":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
        case "s":
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
        case "d":
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;
        case "j":
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
        case "k":
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
        case "l":
            var kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
        default:
            console.log("Click Perfact key "+key+" Is not for this");
            break;
    }
}

// setTimeout(function, milliseconds) w3school resorses

function buttonAnimation(currentkey){
  var x=document.querySelector("."+currentkey).classList.add("pressed");

   setTimeout(function(){
    var xj=document.querySelector("."+currentkey).classList.remove("pressed")
   },100)
}