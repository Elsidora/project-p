'use strict'

var form = document.querySelector(".form"),
    submitForm = form.querySelector("[type=submit]"),
    popupYes = document.querySelector(".popup--yes"),
    popupNo = document.querySelector(".popup--no"),
    closeYes = document.querySelector(".close-yes"),
    closeNo = document.querySelector(".close-no"),
    overlay = document.querySelector(".popup-overlay"),
    familyUser = form.querySelector("[name=family]"),
    nameUser = form.querySelector("[name=name]"),
    phone = form.querySelector("[name=phone]"),
    email = form.querySelector("[name=email]");

  form.addEventListener("submit", function(e) {

    if (!familyUser.value || !nameUser.value || !phone.value || !email.value) {
      e.preventDefault();
      popupNo.classList.add("popup--show");
      overlay.classList.add("popup-overlay--open")
    } else {
        e.preventDefault();
        popupYes.classList.add("popup--show");
        overlay.classList.add("popup-overlay--open");
      }
  });

  window.addEventListener("keydown", function(e) {
    if (e.keyCode === 27) {
      e.preventDefault();
      if (popupYes.classList.contains("popup--show")) {
        popupYes.classList.remove("popup--show");
        overlay.classList.remove("popup-overlay--open");
      }
    }
  });

  window.addEventListener("keydown", function(e) {
    if (e.keyCode === 27) {
      e.preventDefault();
      if (popupNo.classList.contains("popup--show")) {
        popupNo.classList.remove("popup--show");
        overlay.classList.remove("popup-overlay--open");
      }
    }
  });

  closeYes.addEventListener("click", function(e) {
    e.preventDefault();
    popupYes.classList.remove("popup--show");
    overlay.classList.remove("popup-overlay--open");
});

  closeNo.addEventListener("click", function(e) {
    e.preventDefault();
    popupNo.classList.remove("popup--show");
    overlay.classList.remove("popup-overlay--open");
});
