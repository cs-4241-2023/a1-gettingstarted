function applyRgbEffect() {
    const h1 = document.querySelector('h1');
    h1.classList.add('color-effect');
  
    let position = 100;
    setInterval(() => {
      position = (position - 1) % 100;
      h1.style.backgroundPosition = `${position}% 0`;
    }, 100);
  }
  
  window.addEventListener('DOMContentLoaded', function() {
    applyRgbEffect();
  });
  