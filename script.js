function imageFadeIn() {
  const image = document.getElementById("photo");
  image.style.opcaity = 0;
  let current_opacity = 0;
  const interval = setInterval(() => {
    current_opacity += 0.01;
    image.style.opacity = current_opacity;
    if (current_opacity >= 1) {
      clearInterval(interval);
    }
  }, 100);
}

console.log("script starting");
imageFadeIn();
