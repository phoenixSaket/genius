var i = 0;
var txt = "Technology is really at it's best when it brings people together."; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
    if (i < txt.length) {
        console.log(txt);
        document.getElementById("quote").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}