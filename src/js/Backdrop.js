const btn = document.querySelector(".hamburger-wrapper");
const back = document.querySelector(".backdrop");
const sidedrawer = document.querySelector(".sidedrawer");
const close = document.querySelector(".close");

const backdrop = () => {
  btn.addEventListener("click", () => {
    back.style.animation = "backdrop-in .3s ease-in-out forwards";
  });

  back.addEventListener("click", () => {
    back.style.animation = "backdrop-out .3s ease-in-out";
    sidedrawer.style.animation = "move-to-left .3s ease-in-out forwards";
    close.style.animation = "hide .3s ease-in-out";
  });
};

backdrop();

export default backdrop;
