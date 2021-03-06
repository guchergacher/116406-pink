"use strict";

var contactsLink = document.querySelector(".contacts__link");
var contactsFrame = document.querySelector(".contacts__frame");

if (contactsLink && contactsFrame) {
  contactsLink.classList.add("contacts__link--js");
  contactsFrame.classList.add("contacts__frame--js");
}

var header = document.querySelector(".header");
var app = document.querySelector(".app");

header.classList.add("header--js");

if (app) {
  app.classList.add("app--js");
}

var content = document.querySelector(".content__title-wrapper");

if (content) {
  content.classList.add("content__title-wrapper--js");
}

var headerCross = header.querySelector(".header__button-cross");
var headerBurger = header.querySelector(".header__button-burger");

headerBurger.onclick = function () {
  header.classList.add("header--show");
};

headerCross.onclick = function () {
  header.classList.remove("header--show");
};
