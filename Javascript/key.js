const box = document.querySelector(".box");
let x = 0,
  y = 0;

window.addEventListener("keydown", (event) => {
  // console.log(event.key);
  if (event.key == "ArrowDown") {
    y += 10;
    box.style.top = y + "px";
  } else if (event.key == "ArrowRight") {
    x += 10;
    box.style.left = x + "px";
  } else if (event.key == "ArrowUp" && y >= 0) {
    y -= 10;
    box.style.top = y + "px";
  } else if (event.key == "ArrowLeft" && x >= 0) {
    x -= 10;
    box.style.left = x + "px";
  }
});
