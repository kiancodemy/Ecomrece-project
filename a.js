"use strict";
const allimage = document.querySelectorAll(".image-elemnt");

const mainpic = document.querySelector(".main-pic-img");
const deleteit = document.querySelector(".delete");

const slide = document.querySelectorAll(".slide");
const slider = document.querySelector(".slider");
const minus = document.querySelector(".minus");
const plus = document.querySelector(".plus");
const add_cart = document.querySelector(".add_cart ");
const price_tag = document.querySelector(".price_tag ");
const nextt = document.querySelector(".nextt ");
let b = 0;
let finalcost = 0;
plus.addEventListener("click", function () {
  b++;
  finalcost = `${125 * b}$ `;
  price_tag.textContent = finalcost;
});
minus.addEventListener("click", function () {
  if (b > 0) {
    b--;
    finalcost = `${125 * b}$ `;
    price_tag.textContent = finalcost;
  } else {
    return;
  }
});
add_cart.addEventListener("click", function () {
  nextt.textContent = b;
});

allimage.forEach((a) => {
  a.addEventListener("click", function () {
    const id = this.getAttribute("src");
    const a = id.split("-");

    const d = a.slice(0, 3).join("-");

    mainpic.setAttribute("src", `${d}.jpg`);
  });
});

slide.forEach(function (a, b) {
  a.style.transform = `translateX(${b * 100}%)`;
});
const max = slide.length;
const right = document.querySelector(".slider__btn-r");
const left = document.querySelector(".slider__btn-l");
let cur = 0;
left.addEventListener("click", function () {
  if (cur == 0) {
    cur = max - 1;
  } else {
    cur--;
  }

  slide.forEach(function (a, b) {
    a.style.transform = `translateX(${(b - cur) * 100}%)`;
  });
});

right.addEventListener("click", function () {
  if (cur === max - 1) {
    cur = 0;
  } else {
    cur++;
  }

  slide.forEach(function (a, b) {
    a.style.transform = `translateX(${(b - cur) * 100}%)`;
  });
});
const section = document.querySelector(".section");
const mainpi = document.querySelector(".main-pic-img");
mainpi.addEventListener("click", function () {
  section.style.filter = "blur(10px)";
  slider.classList.remove("hidden");
});
deleteit.addEventListener("click", function () {
  slider.classList.add("hidden");
  section.style.filter = "none";
});
