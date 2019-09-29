const gallery = () => {
  const current = document.querySelector("#current");
  const tiles = document.querySelectorAll(".tile");

  tiles.forEach(tile => {
    tile.addEventListener("click", () => {
      let src = tile.firstChild.src;
      current.src = src;
    });
  });
};
gallery();

export default gallery;
