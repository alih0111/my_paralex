"use strict";
const firstPage = document.querySelector(".first-page");
const secondPage = document.querySelector(".second_page");
const thirdPage = document.querySelector(".third_page");
const mainTitle = document.querySelector(".first-page h1");
const background = document.querySelector(".background");
const foreground = document.querySelector(".foreground");
const middleground = document.querySelector(".middleground");
const spans = document.querySelectorAll(".second_page h1 span");

const FIRST_PAGE_MAX_SCROLL = 500;
const FIRST_TRANS_MIN = 450;
const FIRST_TRANS_MAX = 600;
const SECONDPAGE_BR = 1100;

secondPage.style.opacity = 0;
thirdPage.style.opacity = 0;
document.addEventListener("scroll", function (event) {
  let scrollOffset = window.pageYOffset;

  if (firstPage.style.opacity <= 0) {
    firstPage.hidden = true;
  } else {
    firstPage.hidden = false;
  }

  if (scrollOffset <= FIRST_PAGE_MAX_SCROLL) {
    // firstPage.hidden = false;
    firstPage.style.opacity = 1;
    secondPage.style.opacity = 0;
    let p = scrollOffset / FIRST_PAGE_MAX_SCROLL;

    mainTitle.style.transform = `scale(${1 + p})`;
    background.style.transform = `scale(${1 + 0.4 * p})`;
    foreground.style.transform = `scale(${1 + 0.4 * p})`;
    middleground.style.transform = `scale(${1 + p})`;
  }

  if (scrollOffset > FIRST_TRANS_MIN && scrollOffset <= FIRST_TRANS_MAX) {
    let op = scrollOffset / FIRST_TRANS_MAX;
    firstPage.style.opacity = 1 - op;
    secondPage.style.opacity = op;
  } else if (scrollOffset > FIRST_TRANS_MAX && scrollOffset <= SECONDPAGE_BR) {
    let yChanger = scrollOffset - FIRST_TRANS_MAX;
    spans[0].style.transform = `translate3d(0, ${yChanger}px ,0)`;
    spans[2].style.transform = `translate3d(0,-${yChanger}px,0)`;
    console.log(spans[0]);
  } else {
    let thirdScroll = scrollOffset - SECONDPAGE_BR;
    thirdPage.style.opacity = 1;
    app.style.transform = `translate3d(0,-${thirdScroll}px,0)`;
  }
});
