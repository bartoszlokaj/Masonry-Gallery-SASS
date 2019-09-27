const modal = () => {
  const tiles = document.querySelectorAll(".tile");
  const tilesAr = Array.from(tiles);

  const backdrop = document.querySelector(".backdrop");
  const modal = document.querySelector(".modal");
  const close = document.querySelector(".close");

  tilesAr.forEach((el, index) => {
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

  console.log("hello from backdrop");
};

modal();

export default modal;
