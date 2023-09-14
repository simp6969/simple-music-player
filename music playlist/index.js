document.getElementById("playing_icon").style.display = "none";
//functions
var music = new Audio("jocelyn-flores-audio.mp3");
function play_music() {
  document.getElementById("stopped_icon").style.display = "none";
  document.getElementById("playing_icon").style.display = "block";
  document.getElementById("musics").style.animation =
    "rotate infinite 3s linear";
  music.play();
  return music;
}

function stop_music() {
  music.pause();
  document.getElementById("musics").style.animation = "none";
  document.getElementById("stopped_icon").style.display = "block";
  document.getElementById("playing_icon").style.display = "none";
  document.getElementById("playing_icon").style.animation = "none";
}
