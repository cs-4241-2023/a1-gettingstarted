function moveText() {
  let mytext = document.getElementById("annoying");
  mytext.style.top = Math.round(Math.random()*300) + 'px';
  mytext.style.left = Math.round(Math.random()*300) + 'px';
}

window.onload = function() {
  setInterval(moveText, 1000);
}