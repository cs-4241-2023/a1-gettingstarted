
Samuel Karkache - Assignment 1
---
This is the first project for CS 4241 Webware. 

## Technical Achievements
- **Created JavaScript Animation for the Header and Footer**: Created a function called `animateElement` that animates 
a given element either vertically or horizontally at a given speed. The function takes three arguments. The `element` argument
is the HTML element that is going to be animated. This is typically obtained in JavaScript by using the `document.getElementById`
function. The `speed` argument is the relative speed of the animation and the animationDirection is the direction of the animation
(specified by a direction enum). The function utilizes the `setInterval` function given by JavaScript in order to animate the
element. This function allows code specified in a callback closure/function to be called repeatedly during a specified interval.
Inside this closure/function, the position of the element is set and then subsequently updated. The size of the user's screen
is obtained to ensure the element does not leave the screen completely. Once the element has reached the edge of the screen, the position
is decreased.

### Design Achievements
- **Used the Roboto Font from Google Fonts**: I used Roboto as the font for the primary copy text in my site.
