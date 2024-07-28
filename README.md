# Hangman Game

This is a simple Hangman game built with React. The game randomly selects a word from a list, and the player has to guess the letters of the word. The player wins if they guess the word correctly and loses if they make six incorrect guesses.

## Features

- Randomly selects a word from a list
- Displays the Hangman drawing based on incorrect guesses
- Reveals correctly guessed letters in the word
- Disables already guessed letters on the keyboard
- Displays a restart button after the game is over (win or lose)
- Responsive design

## Technologies Used

- React
- TypeScript
- CSS

## Getting Started

### Prerequisites

Make sure you have Node.js and npm installed on your machine.

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/your-username/hangman-game.git
    cd hangman-game
    ```

2. Install the dependencies:
    ```sh
    npm install
    ```

3. Start the development server:
    ```sh
    npm start
    ```

4. Open your browser and navigate to `http://http://localhost:5173/Hangman/` to see the app.

## Deployment

This project is deployed on GitHub Pages. You can access the live version of the game [here](https://saitejakomirishetty.github.io/Hangman/).

### Steps to Deploy on GitHub Pages

1. Add the following scripts to your `package.json`:
    ```json
    "homepage": "https://your-username.github.io/hangman-game",
    "scripts": {
      "predeploy": "npm run build",
      "deploy": "gh-pages -d build"
    }
    ```

2. Install the `gh-pages` package:
    ```sh
    npm install --save gh-pages
    ```

3. Deploy the application:
    ```sh
    npm run deploy
    ```

## Project Structure

- `App.tsx`: The main component that contains the game logic and state.
- `HangmanDrawing.tsx`: Component for rendering the Hangman drawing based on the number of incorrect guesses.
- `HangmanWord.tsx`: Component for displaying the word to guess with correctly guessed letters revealed.
- `Keyboard.tsx`: Component for rendering the keyboard and handling letter guesses.
- `wordList.json`: JSON file containing the list of words to be guessed.

## Contributing

If you would like to contribute, please fork the repository and use a feature branch. Pull requests are welcome.

