
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

