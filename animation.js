setInterval(animateHeader, 1000);

function animateHeader() {
  document.getElementsByTagName("h1")[0].style.border = getRandomBorder();
}

function getRandomBorder() {
  const borders = ["dotted", "dashed", "solid", "double", "groove", "ridge", "inset", "outset", "none", "hidden", "dotted dashed solid double"];
  var randPos = Math.floor(Math.random() * borders.length);
  
  return borders[randPos];
}

