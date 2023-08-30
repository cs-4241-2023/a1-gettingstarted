/**
 * Defines the direction of an animation
 * @type {{Vertical: number, Horizontal: number}}
 */
const direction = {
    Vertical: 0,
    Horizontal: 1
}

/**
 * Animates an element horizontally across the window
 *      element: element to be animated
 *      speed: horizontal speed of the element
 */
let animateElement = (element, speed, animationDirection) => {

    let pos = 0;
    if(animationDirection === direction.Horizontal) pos = element.getBoundingClientRect().x;
    else if(animationDirection === direction.Vertical) pos = element.getBoundingClientRect().y;

    let headerLength = element.getBoundingClientRect().width;
    let screenWidth = screen.width;
    let state = 0;

    setInterval(() => {
        if(pos < screenWidth - headerLength && state === 0) {
            pos = pos + speed;
        } else {
            state = 1;
            pos = pos - speed;

            if(pos < 0) {
                state = 0;
            }
        }
        element.style.left = pos + 'px';
    }, 100);
}

/**
 * Run horizontal animation on the header when document content has loaded with speed value of 25
 */
document.addEventListener("DOMContentLoaded", () => { animateElement(document.getElementById("header"), 25, direction.Horizontal)});