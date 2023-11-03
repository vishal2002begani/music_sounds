var it=document.querySelectorAll(".drum").length;
for(var i=0;i<it;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",handleclick);
}
function handleclick()
{
    this.style.color="white";
    var a=this.innerHTML;
    switch(a)
    {
        case "w":
            var audio=new Audio("sounds/tom-1.mp3")
            audio.play();
            break;
        case "a":
            var audio=new Audio("sounds/tom-2.mp3")
            audio.play();
            break;
        case "s":
            var audio=new Audio("sounds/tom-3.mp3")
            audio.play();
            break;
        case "d":
            var audio=new Audio("sounds/tom-4.mp3")
            audio.play();
            break;
        case "j":
            var audio=new Audio("sounds/snare.mp3")
            audio.play();
            break;
        case "k":
            var audio=new Audio("sounds/crash.mp3")
            audio.play();
            break;
        case "l":
            var audio=new Audio("sounds/kick-bass.mp3")
            audio.play();
            break;
        default:
            console.log(a);
    }
}
document.addEventListener("keydown",function(event){
    //alert("helo");
    console.log(event.key);
    var a=event.key;
    switch(a)
    {
        case "w":
            var audio=new Audio("sounds/tom-1.mp3")
            audio.play();
            break;
        case "a":
            var audio=new Audio("sounds/tom-2.mp3")
            audio.play();
            break;
        case "s":
            var audio=new Audio("sounds/tom-3.mp3")
            audio.play();
            break;
        case "d":
            var audio=new Audio("sounds/tom-4.mp3")
            audio.play();
            break;
        case "j":
            var audio=new Audio("sounds/snare.mp3")
            audio.play();
            break;
        case "k":
            var audio=new Audio("sounds/crash.mp3")
            audio.play();
            break;
        case "l":
            var audio=new Audio("sounds/kick-bass.mp3")
            audio.play();
            break;
        default:
            console.log(a);
    }
})