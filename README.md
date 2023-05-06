<h1>Christmas Memory Game</h1>
<br>
<br>
<p>The Christmas Memory Game is a fun activity around Christmas time. Can be played by adults and children as well. The game improves memory and focus while also having fun discovering different images.
<br>
As memory is one of the most important asset of a human being, users will gain valuable skills while playing this game. </p>
<br>
<img src="assets/images/responsivegame.jpg" alt="multiple screen sizes diplaying the website">
<br>
<h2>Features</h2>
<br>
 - To structure the game's layout, I have used Figma to create the wireframe for the page:
 <br>
<img src="assets/images/wireframe1.jpg" alt="A mock-up of the game page">
<br>
<h3>Existing Features</h3>
<br>
<h4><strong>Header</strong></h4>
<br>
- It contains a Christmas related photo to enter into the atmosphere of the game.
It also states  the name of the game, in a font part of the Christmas theme.
<br>
- It also has the snow effect, for a winterwonderland feeling. The snow effect has a toggle button to be disabled in case users wish to not use the effect. 
<img src="assets/images/header.jpg" alt="santa sleigh and name of the game">
<br>
<h4><strong>First section</strong></h4>
-It highlights the instructions on how to play the game, written in a happy, cheerful tone, to help users learn more about the game. It brings important information for the user. It clearly tells how to start and play the game. It also has a good contrast on the page.
<img src="assets/images/instructions.jpg" alt="a paragraph with instructions, written in black">
<br>
<h4><strong>Statistics controls</strong></h4>
- A div that helps the user keep track of his score and time spend on the game. It registers the number of moves the user has and also the seconds he spent playing. A great way to compare between highscores with the same user or with different users if played with your family.
<br>
- The moves show up after the first 2 cards are turned, and the timer starts then as well.
<br>
- There's also a button to invite users to play the game again. The button will reset the timer and reload the page, with a brand new board. Cards are suffled each time the Restart button is pressed.
<br>
<img src="assets/images/moves-timer-restart.jpg" alt="area for scores, number of moves, a timer and a play again button for the game">
<br>
<h4><strong>Game section</strong></h4>
- Using Christmas color theme, this section contains the game itself. A board with 18 cards, 9 images that repeat themselves. Only two images can be turned at the same time. If they match, they will stay turned and the user can move on in finding the other pairs until the full board of cards is turned. 
<br>
- The front of the cards are showing snowflakes, in Christmas colours.
<br>
- The images on the other side of the cards are fun winter themed, with snow, snowman, Christmas Tree and Christmas presents, with kids, couples and families, making everything attractive and fun to play and discover.
<br>
<img src="assets/images/board.jpg" alt="a board of 16 cards">
<br>
- The board is created as a holder in HTML, images are stored in json files and fetched into JavaScrip, using the Fetch API method, which works good when having a local json file. 
<br>
- Other option for the json file to load is from a server, or to use import method. In this case, the Fetch API method worked well.
<br>
<br>
<h4>Java Script Functions</h4>
<br>
- The query selector was used to referance the html grid-container class
<br>
- The json file was fetched into the JavaScript using Fetch API method, returning a to convert into json file with res.json().<br>The data was then added to the "card" array.
<br>
- The shuffle the cards data helps to randomize the cards display, using the math method.
<br>
- The generate the cards function uses a for loop to iterate through the cards. The innerHTML property is used to display the back and the front of the cards.
<br>
- The flip function checks the status of lockBoard variable and flipes the cards to display their front face. <br>Each flip adds to the moves score, incrementing it and displaying it at the top of the page.
<br>
- The check for a match function uses an if statement to see if the name of the image match, if they do, the disableCards() <br>is called to allow for the cards to stay unflipped, if they don't, the unflipCards() is called.
<br>
- The resetBoard resets the board after each matching atempt, and restartGame function helps to restart the game, <br> shuffling the cards again for a new set, brining the score and the timer back to 0.
<br>
<h3>Features left to implement</h3>
<br>
<h4>Result message</h4><br>
- A result message with the number of moves and the time spend to finish the game. Time to be displayed in minutes and seconds.
<br>
<h3>Fixed bugs</h3>
- Json file was not working in jaVascript. I moved the file into a public folder and change the source path for it to work.
<br>
- Screen responsivness was not working. It was the wrong name of the class in CSS for media query. 
<br>
- Cards unmatched to turn back on before the next click on the next card. This was fixed with setTimeout() function.
<br>
<h3>Bugs to be fixed</h3>
- Time to stop when all cards are flipped and game is won.
<br>
<br>
<h3>Testing</h3>
<br>
- I've tested that this website works in different browsers, Chrome, Edge and Safari
<br>
- I've tested and the website works in different devices, being responsive to them: mobile devices, tablets and 8 inch screens
<br>
<img src="assets/images/responsive1.jpg" alt="responsiveness of webpage to different screen sizes">
<img src="assets/images/responsive2.jpg" alt="responsiveness of webpage to different screen sizes">
<img src="assets/images/responsiveipad.jpg" alt="responsiveness of webpage to different screen sizes">
<br>
- I confirm that the instructions are legible and easy to follow and the game is accesible to all ages, from 3 years old to over 100 years old, all would benefit from playing this game and improving their memory.
All images have text description.
<br>
<img src="assets/images/lighthouseStats.jpg" alt="stats from Developer Tools regarding page performance">
<br>
<h3>Validator testing</h3>
<br>
<h4>HTML</h4>
<br>
-No errors were returned when passing through the official W3C validator, except the Toggle error, which can be ignored
<br>
<h4>CSS</h4>
<br>
-No errors were found when passing through the official (Jigsaw) validator
<br>
<br>
<h4>JavaScript</h4>
<br>
-No errors were found when passing through the official JSHint JavaScript Validator
<br>
- It resulted the following metrics:
<br>
There are 13 functions in this file.
<br>
Function with the largest signature take 1 arguments, while the median is 0.
<br>
Largest function has 12 statements in it, while the median is 3.
<br>
The most complex function has a cyclomatic complexity value of 4 while the median is 1.
<br>
<br>
<h2>Deployment</h2>
<br>
- The site was deployed to Github pages, the steps to deployment as follow:
<br>
A. In the Github repository, navigate to the Settings tab
<br>
B. From there, select Pages from the left side
<br>
C. From the source section drop-down menu select Main as a branch and then save
<br>
D. Once the main branch was selected, the page provided the link to the completed website
<br>
The live link can be found here: [Christmas Memory Game](https://github.com/ancaerena/christmas-match)
<br>
<br>
<h2>Credits</h2>
<br>
- My mentor Jubril Akolade for giving me advice regarding font style, game instructions and JavaScript hints and help
<br>
-While working in JavaScript, a great help was Stack Overflow, for answering questions about the timer in the game.
<br>
- Useful webpages I've navigated for answers: dev.to , freecodecamp.org, aldohadinata.com , codingartistweb.com
<br>
<br>
<h3>Content</h3>
<br>
- snow fall code source can be found here: [PureSnow](https://github.com/hyperstown/puresnowjs)
<br>
<br>
<h3>Media</h3>
<br>
- The header image was created in Canva by me <br>
- The fliped face of the cards were created in a mobile app called MomentsCam <br>
- The unfliped face of the cards were sourced from pattern.monster webpage <br>

