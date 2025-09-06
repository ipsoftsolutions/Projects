let accordianheaders = document.querySelectorAll(".accordian-header");
let accordiancontents = document.querySelectorAll(".accordian-content");

accordianheaders.forEach((header, index) => {
  header.addEventListener("click", () => {
    const accordianItems = header.parentElement;
    const accordiancontent = accordianItems.querySelector(".accordian-content");

    accordiancontents.forEach((content) => {
      if (content !== accordiancontent) {
        content.classList.remove("active");
        content.style.maxHeight = "0px";
      }
    });
    accordiancontent.classList.toggle("active");

    if (accordiancontent.classList.contains("active")) {
      accordiancontent.style.maxHeight = accordiancontent.scrollHeight + "px";
    } else {
      accordiancontent.style.maxHeight = "0px";
    }
  });
});
