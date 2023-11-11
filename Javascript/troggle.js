const btn = document.querySelector("#btn");
const box = document.querySelector(".box");

btn.addEventListener("click", () => {
  if (box.style.display == "none") {
    box.style.display = "block";
  } else {
    box.style.display = "none";
  }
});
