
// РАБОТА С СЛАЙДЕРОМ \\

var sliderArrows = document.querySelectorAll(".slider-arrow");

sliderArrows.forEach(el => {
  el.addEventListener("click", (evt) => {
    var slides = document.querySelectorAll(".slider-item");
    var controls = document.querySelectorAll(".slider-control");
    for (let el of slides) {
      el.classList.contains("active") ? el.classList.remove("active") : el.classList.add("active");
    }
    for (let el of controls) {
      el.classList.contains("active") ? el.classList.remove("active") : el.classList.add("active");
    }
  });
});

var servicesButtons = document.querySelectorAll(".services-btn-self");
var servicesDeliveryBtn = document.querySelector(".services-btn-delivery");
var servicesGuaranteeBtn = document.querySelector(".services-btn-guarantee");
var servicesCreditBtn = document.querySelector(".services-btn-credit");

var services = document.querySelectorAll(".services-list-item");
var servicesDelivery = document.querySelector(".services-delivery");
var servicesGuarantee = document.querySelector(".services-guarantee");
var servicesCredit = document.querySelector(".services-credit");

var clearActiveClass = (collection) => {
  for (let el of collection) el.classList.remove("active");
}

servicesDeliveryBtn.addEventListener("click", (evt) => {
  clearActiveClass(servicesButtons);
  evt.target.classList.add("active");
  clearActiveClass(services);
  servicesDelivery.classList.add("active");
});

servicesGuaranteeBtn.addEventListener("click", (evt) => {
  clearActiveClass(servicesButtons);
  evt.target.classList.add("active");
  clearActiveClass(services);
  servicesGuarantee.classList.add("active");
});

servicesCreditBtn.addEventListener("click", (evt) => {
  clearActiveClass(servicesButtons);
  evt.target.classList.add("active");
  clearActiveClass(services);
  servicesCredit.classList.add("active");
});

// РАБОТА С КАРТОЙ \\

var mapLink = document.querySelector(".contacts-map");
var overlay = document.querySelector(".overlay");

mapLink.addEventListener("click", (evt) => {
  var mapPopup = document.querySelector(".modal-map");
  var modalClose = mapPopup.querySelector(".modal-close");

  var onEscPress = (evt) => {
    if (evt.keyCode === 27) {
      if (mapPopup.classList.contains("modal-show")) {
        mapPopup.classList.remove("modal-show");
        window.removeEventListener("keydown", onEscPress);
      }
    }
  }
  mapPopup.classList.add("modal-show");
  window.addEventListener("keydown", onEscPress);

  modalClose.addEventListener("click", (evt) => {
    mapPopup.classList.remove("modal-show");
    window.removeEventListener("keydown", onEscPress);
  });
});


// РАБОТА С ФОРМОЙ ОБРАТНОЙ СВЯЗИ \\

var openFeedback = document.querySelector(".contacts-feedback");
var feedback = document.querySelector(".modal-feedback");

openFeedback.addEventListener("click", (evt) => {
  var modalClose = feedback.querySelector(".modal-close");
  var form = feedback.querySelector("form");
  var userName = feedback.querySelector("[name=feedback-name]");
  var userEmail = feedback.querySelector("[name=feedback-email");
  var userMessage = feedback.querySelector("[name=feedback-message]");
  var feedbackSubmit = feedback.querySelector(".feedback-submit");

  var storedName = localStorage.getItem("name");
  var storedEmail = localStorage.getItem("email");
  var storedMessage = localStorage.getItem("message");

  var onEscPress = (evt) => {
    if (evt.keyCode === 27) {
      if (feedback.classList.contains("modal-show")) {
        feedback.classList.remove("modal-show");
        feedback.classList.remove("modal-error");
        overlay.classList.remove("overlay-show");
        document.querySelector("body").classList.remove("stop-scroll");
        window.removeEventListener("keydown", onEscPress);
      }
    }
  }

  feedback.classList.add("modal-show");
  overlay.classList.add("overlay-show");
  document.querySelector("body").classList.add("stop-scroll");

  if (localStorage.length) {
    userName.value = storedName;
    userEmail.value = storedEmail;
    userMessage.value = storedMessage;
  } else {
    userName.focus();
  }

  window.addEventListener("keydown", onEscPress);

  modalClose.addEventListener("click", (evt) => {
    feedback.classList.remove("modal-show");
    feedback.classList.remove("modal-error");
    overlay.classList.remove("overlay-show");
    document.querySelector("body").classList.remove("stop-scroll");
    window.removeEventListener("keydown", onEscPress);
  });

  form.addEventListener("submit", (evt) => {
    if (!userName.value || !userEmail.value || !userMessage.value) {
      evt.preventDefault();
      feedback.classList.remove("modal-error");
      void feedback.offsetWidth;
      feedback.classList.add("modal-error");
      console.log("Все поля должны быть заполнены");
    } else {
      localStorage.setItem("name", userName.value);
      localStorage.setItem("email", userEmail.value);
      localStorage.setItem("message", userMessage.value);
    }
  });
});

