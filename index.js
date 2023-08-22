function getPathAudio(buttonText) {
    var path;
    switch (buttonText) {
        case "w":
            path = "sounds/tom-1.mp3";
            break;
        case "a":
            path = "sounds/tom-2.mp3";
            break;
        case "s":
            path = "sounds/tom-3.mp3";
            break;
        case "d":
            path = "sounds/tom-4.mp3";
            break;
        case "j":
            path = "sounds/snare.mp3";
            break;
        case "k":
            path = "sounds/crash.mp3";
            break;
        case "l":
            path = "sounds/kick-bass.mp3";
            break;
        default:
            break;
    }
    return path;
}

for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        const audio = new Audio(getPathAudio(this.textContent));
        audio.play();
        this.style.color = 'white';
    });
}

document.addEventListener("keydown", function (event) {
    const audio = new Audio(getPathAudio(event.key));
    audio.play();
    buttonAnimation(event.key);
})



function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 50);
}


// w - tom1
//a - tom2
//s - tom3
//d - tom4
// j - snare
//k - crash
//l - kick

//trước khi click để lấy event,
// for sẽ chạy và add event listener vào hết các button .drum.

// for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
//     var drumElement = document.querySelectorAll(".drum")[i];
//     if (!drumElement.classList.contains("event-added")) {
//         drumElement.addEventListener("click",
//             function () {
//                 var buttonText = this.textContent;
//                 alert("I got clicked!" + buttonText);
//             });
//         drumElement.classList.add("event-added");
//     }
// }

