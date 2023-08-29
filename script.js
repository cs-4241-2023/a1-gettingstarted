var isMoved = false;

function moveButton() {
  if (!isMoved) {
    document.getElementById("movingButton").style.left = "100px";
  } else {
    document.getElementById("movingButton").style.left = "10px";
  }
  isMoved = !isMoved;
}
