const allimage = document.querySelectorAll(".image-elemnt");

const mainpic = document.querySelector(".main-pic-img");

allimage.forEach((a) => {
  a.addEventListener("click", function (e) {
    const id = this.getAttribute("src");
    console.log("1");
    mainpic.setAttribute("src", id);
  });
});
