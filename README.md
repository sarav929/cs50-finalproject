# Sketch it - CS50 Final Project

- [Live preview](https://sarav929.github.io/sketch-it-cs50/)

- [Video Demo](https://www.youtube.com/watch?v=mBxZV9pg-_0)

For my CS50 final project, I created a reference website for artists called "Sketch it" designed to help users get inspired and practice their sketching by generating random reference images. The website integrates the Unsplash API to fetch images based on user-selected categories and it features an optional timer that controls how long each image stays on screen before a new one is generated.

### Features:
- Practice Subject Selection: The homepage allows users to choose a subject category and sub-category to specify what type of reference image they want.
- Optional Timer: Users can also set a timer to control how long the image stays visible before a new one appears.
- Image Generation: Once the user selects their preferences and presses "Start", they are redirected to a session page where a random image based on their selections is displayed.
- Interactive Session: The session page has several interactive features:
  - Timer Controls: Pause and play buttons to manage the timer.
  - Image Refresh: A button to generate a new image if the user wishes to change it.
  - Back Button: A button to return to the homepage and restart the session.
  - Black & White Slider: A slider that converts the image to black and white to help users focus on values and shapes during their sketching practice.
  - Image Credits: Each displayed image includes credits to the author, fetched directly from the Unsplash API.
    
### Technologies:
- Unsplash API: Used to fetch relevant reference images based on the user’s selected category and sub-category. I tested and adjusted the values assigned to options in the subject select dropdowns to have the most relevant results possible with the API.
- Local Storage: Used to store user selections for the current session, allowing for a smooth session flow without needing to refresh the page. The local storage is cleared when the user returns to the homepage to start a new session.
- JavaScript: Used for managing the timer, image fetching, and interactive elements like the refresh and control buttons.
  

I plan on recreating this application using the React framework in the near future to practice, improve performance and further enhance the user experience.
