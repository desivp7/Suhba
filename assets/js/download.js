// Download Overlays

function openWin() {
    document.getElementById("downloadWin").style.height = "100%";
}
function closeWin() {
    document.getElementById("downloadWin").style.height = "0%";
}



function openBrowser() {
    document.getElementById("downloadBrowser").style.height = "100%";
}
function closeBrowser() {
    document.getElementById("downloadBrowser").style.height = "0%";
}

function openNetwork() {
    document.getElementById("downloadNetwork").style.height = "100%";
}
function closeNetwork() {
    document.getElementById("downloadNetwork").style.height = "0%";
}

function openMessenger() {
    document.getElementById("downloadMessenger").style.height = "100%";
}
function closeMessenger() {
    document.getElementById("downloadMessenger").style.height = "0%";
}

//VIDEO

var vid = document.getElementById("bgvid");
var pauseButton = document.querySelector("#short button");

if (window.matchMedia('(prefers-reduced-motion)').matches) {
    vid.removeAttribute("autoplay");
    vid.pause();
    pauseButton.innerHTML = "Paused";
}

function vidFade() {
  vid.classList.add("stopfade");
}

vid.addEventListener('ended', function()
{
// only functional if "loop" is removed 
vid.pause();
// to capture IE10
vidFade();
}); 


pauseButton.addEventListener("click", function() {
  vid.classList.toggle("stopfade");
  if (vid.paused) {
    vid.play();
    pauseButton.innerHTML = "Pause";
  } else {
    vid.pause();
    pauseButton.innerHTML = "Paused";
  }
})

