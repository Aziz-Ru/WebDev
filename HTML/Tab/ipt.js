const tabs = document.querySelectorAll(".tab_menu");
const all_content = document.querySelectorAll(".content");
// console.log(all_content);
// array.forEach(function(currentValue, index, arr), thisValue)
tabs.forEach((tab, index) => {
  // console.log(index);
  tab.addEventListener("click", () => {
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });
    tab.classList.add("active");
    all_content.forEach((content) => {
      content.classList.remove("active");
    });
    all_content[index].classList.add("active");
  });
});
