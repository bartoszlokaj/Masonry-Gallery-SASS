const cardRotate = () => {
  let btn = document.querySelectorAll(".button--rotate");
  let btnArray = Array.from(btn);

  let cardFront = document.querySelectorAll(".card__side--front");
  let cardFrontArray = Array.from(cardFront);

  let cardBack = document.querySelectorAll(".card__side--back");
  let cardBackArray = Array.from(cardBack);

  let close = document.querySelectorAll(".close--card");
  let closeArray = Array.from(close);

  btnArray.forEach((el, index) => {
    el.addEventListener("click", () => {
      cardFrontArray[index].classList.add("rotate-front");
      cardBackArray[index].classList.add("rotate-back");
    });
  });

  closeArray.forEach((el, index) => {
      el.addEventListener('click', () => {
        cardFrontArray[index].classList.remove("rotate-front");
        cardBackArray[index].classList.remove("rotate-back");
      })
  })
};

cardRotate();

export default cardRotate;
