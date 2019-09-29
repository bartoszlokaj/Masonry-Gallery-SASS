const modal = () => {
  const tiles = document.querySelectorAll(".tile"),
    backdrop = document.querySelector(".backdrop"),
    modal = document.querySelector(".modal"),
    close = document.querySelector(".close");

  tiles.forEach(el => {
    el.addEventListener("click", () => {
      backdrop.style.animation = "backdropIn .2s ease-in-out forwards";
      modal.style.animation = "modalIn .2s ease-in-out forwards";
    });
  });

  backdrop.addEventListener("click", () => {
    backdrop.style.animation = "backdropOut .2s ease-in-out forwards";
    modal.style.animation = "modalOut .2s ease-in-out forwards";
  });

  close.addEventListener("click", () => {
    backdrop.style.animation = "backdropOut .2s ease-in-out forwards";
    modal.style.animation = "modalOut .2s ease-in-out forwards";
  });
};

modal();

export default modal;
