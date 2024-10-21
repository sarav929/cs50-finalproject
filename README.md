# Sketch it 
### CS50 final project

- [Live preview](https://sarav929.github.io/cs50-finalproject/)

- [Video Demo](https://www.youtube.com/watch?v=mBxZV9pg-_0)

For my final project I decided to create a reference website for sketching or getting inspired to create art. The website is called "Sketch it" and it works with the Unsplash.com API to generate reference images according to user's input. 

In the homepage index.html the user is prompted to select a practice subject category, sub-category and an optional timer for the image to stay on the screen before a new one is generated. I tested and adjusted the values assigned to options in the subject select dropdowns to have the most relevant results possible with the API.
In app.js the values for the practice subject and the timer are passed on to the next page by local storage. I thought this was the best way to do so as the values need to be stored only for the current session. Local storage gets cleared if the user goes back to the homepage to start a new session. 

Once the user presses "start" they get redirected to session.html. In app-session.js I created the functions for the timer and the one that generates an image based on the value assigned to the option selected by the user through unsplash.com API. 
I added a few commands to control the session: pause and play buttons for the timer, a refresh button to generate a new image and a back button to go back to the homepage. 
I also added a slider that turns the image black and white to be used if the user wants to focus on values and shapes. 
Under the image I also added the credits for the picture, getting the values for the author's details from the API data. 

