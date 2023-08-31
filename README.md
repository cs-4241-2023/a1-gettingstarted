
Samuel Karkache - Assignment 1
---
This is the first project for CS 4241 Webware. 

## Technical and Design Achievements

- **Style Rules in style.css**: Many style rules were added to style.css to style the web page. The `html` selector is used 
to apply style rules universally. For example, I wanted the web page to be in 'dark mode' by default. So under the `html selector`
I created a style rule that said `background: black`. Since different elements of the same type required different style rules,
I styled a lot of the elements by referencing IDs that I set inside HTML. These can be seen in style.css.

- **Created JavaScript Animation for the Header and Footer**: I created a function called `animateElement` that animates 
a given element either vertically or horizontally at a given speed. The function takes three arguments. The `element` argument
is the HTML element that is going to be animated. This is typically obtained in JavaScript by using the `document.getElementById`
function. The `speed` argument is the relative speed of the animation and the `animationDirection` argument is the direction of the animation
(specified by a direction enum). The function utilizes the `setInterval` function given by JavaScript in order to animate the
element. This function allows code specified in a callback closure/function to be called repeatedly during a specified interval.
Inside this closure/function, the position of the element is set and then subsequently updated. The size of the user's screen
is obtained to ensure the element does not leave the screen completely. Once the element has reached the edge of the screen, the position
is decreased.

- **Used 'mouseover' and 'mouseout' Events to Change Text Size**: When the user hovers their mouse over the 'course title', 
'skill title' or the 'class number' the text size of these elements increase. When the mouse is taken off of these elements,
the text size reverts back to the default size. To try this out, hover your mouse over the text that says 'Class of 2024',
'CS Courses Completed at WPI:' and 'Experience with the following technologies:'. This was implemented via a function I created 
called `initMouseOverFont`. This function loops over an array of elements and for each element, it creates an event listener for
the 'mouseover' and 'mouseout' events. For the 'mouseover' event the text size is set to large while for the 'mouseout' event the
text size is set back to the default value of 'medium'.

- **Created JavaScript Function to Dynamically Change Text Color**: The text contents of the course list and skill list change color
dynamically. This was implemented with a JavaScript function I created called `rgbElement`. This function takes two arguments. The
`element` argument is the element that will be affected and `speed` is the speed in which the color changes in ms. Similar to the 
animation, this function utilizes the `setInterval` function. The `setInterval` function allows for different colors to be set every
few milliseconds using `element.style.color`.
