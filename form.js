"use strict";

const postTagEL = document.querySelector(".post-tag");
const postHeadEl = document.querySelector(".post-head");
const postLinkEl = document.querySelector(".post-link");

const inputElList = document.querySelectorAll(".post-input");

const sendBtn = document.querySelector(".send-input");
const clearBtn = document.querySelector(".clear-input");

clearBtn.addEventListener("click", clearInputFields);

function clearInputFields() {
  for (const input of inputElList) {
    input.value = "";
  }
}
