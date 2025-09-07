const tabs = document.querySelectorAll(".tab_btn");
const all_contents = document.querySelectorAll(".content");

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    tabs.forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");

    var line = document.querySelector(".line");
    line.style.width = tab.offsetWidth + "px";
    line.style.left = tab.offsetLeft + "px";

    all_contents.forEach((content) => content.classList.remove("active"));
    all_contents[index].classList.add("active");
  });
});
