README
===

Thomas Pianka
https://a1-thomaspianka.glitch.me/

This project shows an autobiography page, including some computer science classes I have taken and my experience with various skills. My page was organized using HTML and stylized using CSS. My HTML file also includes a small amount of JavaScript to provide function for the button.

## Technical Achievements
- **Styled page with CSS**: For the `body` element, I used the `background-color` property to change the background color to a red color that was part of my color palette. For the `h1` element, I used the `color` property to change the text color to a blue that was part of my color palette. For my `p` elements, I used the `text-align` property to align the text in those elements to be situated in the center of the screen horizontally. FOr the `p` element above the list of courses, I created and applied the `.courses` class, which contains the `font-weight` property, which I used to make the text in that element bold. For the `img` element, I used the `width` property to adjust how much horizontal space my image took up on my page.
- **Added CSS animation**: Upon clicking the button with value "Click for magic", the image of the cat below the button begins spinning clockwise, accelerating to a very fast speed. To stop the spinning and return the image to its original orientation, one can click the same button again when it has value "Click again to stop". The animation is done entirely with CSS with button control done in JavaScript. The spinning rule was created using the `@keyframes` rule, and it was applied to the image using the CSS `animation` property by assigning tthe class with the `animation` property to the `img` HTML element when the button is clicked.
- **Added semantic HTML tags**: I added two instances of the `ul` element, one to contain my list of courses and the second to display my experience with various languages and skills. I added the `a` element to include a link to a map that shows most of the flights I have taken since 2010. I added the `header` element to contain the `h1` element, which displays the main title of the page. I added the `footer` element to display my name and the year in which the page was made. I added the `img` element to display a picture of my family's cat.

## Design Achievements
- **Created a color palette using Adobe Color**: A screenshot of the color palette I used, titled 'color-palette.png', is included as an image in this repository.
- **Used the Quicksand Font from Google Fonts**: I used Quicksand as the font for the primary copy text in my site, as it felt like a comfortable font while also being readable.

## Additional Resources
- https://www.w3schools.com/css/css3_animations.asp