// This function moves topper button slightly up, so the footer remains readable;

const topperUp = window.addEventListener("scroll", () => {
  const topper = document.querySelector(".topper");
  let height = document.querySelector("body").offsetHeight;
  let scrollHeight = scrollY;

  if (scrollHeight > height - screen.height - 10) {
    topper.classList.add("topper-margin-bottom");
  } else {
    topper.classList.remove("topper-margin-bottom");
  }
});

export default topperUp;
