var min = 00;
var sec = 00;
var milisec = 00;
var Min = document.getElementById("Min");
var Sec = document.getElementById("Sec");
var MiliSec = document.getElementById("MiliSec");
var StartBtn = document.getElementById("Start");
var StopBtn = document.getElementById("Stop");
let RestBtn = document.getElementById("RestBtn");
var interval;

function startTimer() {
  milisec++;
  if (milisec < 9) {
    MiliSec.innerText = "0" + milisec;
  }
  if (milisec > 9) {
    MiliSec.innerHTML = milisec;
  }
  if (milisec > 99) {
    sec++;
    Sec.innerHTML = "0" + sec;
    milisec = 0;
    MiliSec.innerHTML = "0" + 0;
  }
  if (sec > 9) {
    Sec.innerHTML = sec;
  }
  if (sec > 59) {
    min++;
    Min.innerHTML = "0" + min;
    sec = 0;
    Sec.innerHTML = "0" + 0;
  }
  if (min > 9) {
    Min.innerHTML = min;
  }
}
StartBtn.addEventListener("click", () => {
  interval = setInterval(startTimer, 10);
});
StopBtn.addEventListener("click", () => {
  clearInterval(interval);
});
RestBtn.addEventListener("click", () => {
  min = "0" + 0;
  sec = "0" + 0;
  milisec = "0" + 0;
  Min.innerHTML = min;
  Sec.innerHTML = sec;
  MiliSec.innerHTML = milisec;
});
