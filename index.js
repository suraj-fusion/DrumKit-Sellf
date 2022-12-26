var drumButtons=document.querySelectorAll(".drum");

for(var i=0;i<drumButtons.length;i++)
{
    drumButtons[i].addEventListener("click",function(){
   
        
        var drumtype=this.innerHTML;

        playkey(drumtype);
        buttonAnimation(drumtype);
        
       
        
    });                  //here the object or html of whichever button is clicked is passed to the anonymous function as this 
 }


 document.addEventListener("keydown",function(event){

           playkey(event.key);
           buttonAnimation(event.key);
 })


function playkey(varkey)
{
    switch(varkey)
    {
        case "w":
            var audio=new Audio("sounds/tom-1.mp3");
            break;
        case "a":
            var audio=new Audio("sounds/tom-2.mp3");
            break;
        case "s":
            var audio=new Audio("sounds/tom-3.mp3");
            break;
        case "d":
            var audio=new Audio("sounds/tom-4.mp3");
            break;
        case "j":
            var audio=new Audio("sounds/snare.mp3");
            break;
        case "k":
            var audio=new Audio("sounds/crash.mp3");
            break;
        case "l":
            var audio=new Audio("sounds/kick-bass.mp3");
            break;
        default:
            console.log(varkey)
    }
    audio.play();
}

function buttonAnimation(varkey)
{
      var activebutton=document.querySelector("."+varkey);
      activebutton.classList.add("pressed");
      setTimeout(function(){
        activebutton.classList.remove("pressed");
      },100); 
}



