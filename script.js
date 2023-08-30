// h1 cycling color change animation
const h1ColorCycle = (function () {
  
  // array of color palette values in rgb - it really did not like hex values
  const colors = [
    'rgb(52, 78, 65)',
    'rgb(58, 90, 64)',
    'rgb(88, 129, 87)',
    'rgb(163, 177, 138)', 
    'rgb(218, 215, 205)', 
    'rgb(163, 177, 138)', 
    'rgb(88, 129, 87)',
    'rgb(58, 90, 64)'
  ];

  // set color cycle index to 0
  let currentColorIndex = 0;
  
  // select all h1 elements - in this case there is just one at the top
  const h1Elements = document.querySelectorAll("h1");

  // return function that changes h1 color to current color of cycle index and moves index to next color
  // if index reaches end, it loops back to beginning
  return function () {
    h1Elements.forEach(function (h1) {
      h1.style.color = colors[currentColorIndex];
    });
    currentColorIndex = (currentColorIndex + 1) % colors.length;
  };
})();

// when window loads, h1ColorCycle will run every 300 milliseconds
window.onload = function () {
  setInterval(h1ColorCycle, 300);
};
