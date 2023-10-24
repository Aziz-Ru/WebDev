const width = document.getElementById("width");
const height = document.getElementById("height");
width.innerHTML = "Width is " + window.innerWidth;
height.innerHTML = "Height is " + window.innerHeight;

let openTag;
function openWindow() {
  openTag = window.open("https://google.com");
}

function closeWindow() {
  openTag.close();
}

const swidth = document.getElementById("swidth");
swidth.innerHTML = "Screen Width " + screen.width;
sheight.innerHTML = "Screen Height " + screen.height;

console.log(screen.availHeight);
console.log(screen.availWidth);
console.log(window.location.href);
console.log(window.location.pathname);
console.log(window.location.protocol);
console.log(window.location.port);
//window.alert('Give your name');
//window.confirm('confirm please');
//  window.prompt('Enter Your Name','Abdul Aziz');
let time;
function startTime() {
  time = setTimeout(function () {
    document.getElementById("st").innerHTML = "After 3 second";
  }, 3000);
}
function endTime() {
  clearTimeout(time);
  document.getElementById("ed").innerHTML = "stop it";
}
let interval;
function startInterval() {
  interval = setInterval(function () {
    document.getElementById("stInterval").innerHTML =
      new Date().toLocaleTimeString();
  }, 1000);
}
function endInterval() {
  document.getElementById("edInterval").innerHTML = "stop it";
  clearInterval(interval);
}
