const gallery = () => {
  const current = document.querySelector("#current");
  const imgs = document.querySelectorAll(".tile__image");

  imgs.forEach(img =>
    img.addEventListener("click", e => {
      current.src = e.target.src;
    })
  );

  console.log("hello from gallery!");
};
gallery();

export default gallery;
