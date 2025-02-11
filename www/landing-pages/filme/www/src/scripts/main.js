var video = document.getElementById("video");
var button = document.getElementById("button");


function myFunction() {
 if (video.muted == true) {
  video.volume = 0.5; 
  video.muted = false;
  button.innerHTML = "MUTE";
 } else if (video.muted == false) {
  video.muted = true;
  button.innerHTML = "UN-MUTE";
 }
}