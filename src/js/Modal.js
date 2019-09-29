const modal = () => {
  const tiles = document.querySelectorAll(".tile"),
        backdrop = document.querySelector(".backdrop"),
        modal = document.querySelector(".modal"),
        close = document.querySelector(".close");

  tiles.forEach(el => {
    el.addEventListener("click", () => {
      backdrop.classList.add("backdropActive");
      modal.classList.add("modalActive");
    });
  });

  backdrop.addEventListener("click", () => {
    backdrop.classList.toggle("backdropActive");
    modal.classList.toggle("modalActive");
  });

  close.addEventListener("click", () => {
    backdrop.classList.toggle("backdropActive");
    modal.classList.toggle("modalActive");
  });
};

modal();

export default modal;
