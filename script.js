/**
 * Defines the direction of an animation
 * @type {{Vertical: number, Horizontal: number}}
 */
const direction = {
    Vertical: 0,
    Horizontal: 1
}

/**
 *
 * @param element
 * @param speed
 * @param animationDirection
 */
let animateElement = (element, speed, animationDirection) => {

    let pos = 0;
    let elementSize = 0;

    if(animationDirection === direction.Horizontal) {
        pos = element.getBoundingClientRect().x;
        elementSize = element.getBoundingClientRect().width;
    } else if(animationDirection === direction.Vertical) {
        pos = element.getBoundingClientRect().y;
        elementSize = element.getBoundingClientRect().height;
    } else {
        alert("Error: Unknown Animation Direction!");
        return;
    }

    let screenWidth = screen.width;
    let state = 0;

    setInterval(() => {
        if(pos < screenWidth - elementSize && state === 0) {
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
 * rotates the color of a given element between red, green, and blue
 * @param element the element to change the color of
 * @param speed the speed of the color change in ms
 */
let rgbElement = (element, speed) => {
    let rgbArray = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
    let currentColor = 0;

    setInterval(() => {
        element.style.color = rgbArray[currentColor];
        currentColor = (currentColor + 1) % rgbArray.length;
    }, speed)
}

/**
 * Run functions when the page loads
 */
document.addEventListener("DOMContentLoaded", () => {
    animateElement(document.getElementById("header"), 25, direction.Horizontal);
    rgbElement(document.getElementById("class-list"), 250);
    rgbElement(document.getElementById("skill-list"), 250);
});

document.getElementById()

