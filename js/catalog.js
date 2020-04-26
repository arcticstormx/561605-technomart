// РАБОТА С МОДАЛЬНЫМ ОКНОМ ДОБАВЛЕНИЯ В КОРЗИНУ \\

var cart = document.querySelector(".modal-cart");
var buyButtons = document.querySelectorAll(".catalog-item-btn-buy");
var onBuyButtonClick = (evt) => {
  var closeModal = () => {
    cart.classList.remove("modal-show");
  }

  var onEscPress = (evt) => {
    if (evt.keyCode === 27) {
      if (cart.classList.contains("modal-show")) {
        cart.classList.remove("modal-show");
        window.removeEventListener("keydown", onEscPress);
      }
    }
  }

  cart.classList.add("modal-show");
  window.addEventListener("keydown", onEscPress);
  cart.querySelector(".modal-close").addEventListener("click", closeModal);
  cart.querySelector(".modal-cart-btn-continue").addEventListener("click", closeModal);
}

for (let el of buyButtons) {
  el.addEventListener("click", onBuyButtonClick);
}
