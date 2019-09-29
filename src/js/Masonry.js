const imagesLoaded = require('imagesloaded');

const masonry = (grid, gridCell, gridGutter, dGridCol, tGridCol, mGridCol) => {
  console.log("hello from masonry");

  let g = document.querySelector(grid),
    gc = document.querySelectorAll(gridCell),
    gcLength = gc.length,
    gHeight = 0,
    i;

  // Calculate the net height of all the cells in the masonry
  for (i = 0; i < gcLength; ++i) {
    gHeight += gc[i].offsetHeight + parseInt(gridGutter);
  }

  if (window.screen.width >= 1024) {
    g.style.height = gHeight / dGridCol + gHeight / (gcLength + 1) + "px";
  } else if (window.screen.width < 1024 && window.screen.width >= 768) {
    g.style.height = gHeight / tGridCol + gHeight / (gcLength + 1) + "px";
  } else {
    g.style.height = gHeight / mGridCol + gHeight / (gcLength + 1) + "px";
  }
};

["resize", "load"].forEach((event) => {
  // Follow below steps every time the window is loaded or resized
  window.addEventListener(event, () => {
    // Check if all the images finished loading
    imagesLoaded(document.querySelector(".grid"), function() {
      masonry(".grid", ".tile", 5, 3, 2, 1);
      //masonry with 5px gutter, 3 columns on desktop, 2 on teblet and 1 on mobile
    });
  });
});

export default masonry;
