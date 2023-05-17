[<img alt="DCI logo" src="https://github.com/DigitalCareerInstitute/context-api/blob/main/DCI-logo_3.svg" />](https://github.com/DigitalCareerInstitute/context-api/blob/main/DCI-logo_3.svg)

# Create a simple Scoreboard using Context API 

### In this exercise, we practice how to manage global state by using the react hook `useContext`. See the reference image below:

[<img src="https://media.giphy.com/media/72yYFh28jJMbpKtNXZ/giphy.gif" width="280" />](https://media.giphy.com/media/72yYFh28jJMbpKtNXZ/giphy.gif)

## Exercise Instruction

### Basic Setup
- Create a new react app by running `npx create-react-app [app name]` on terminal and start the server with `npm start`.
- Inside the __src__ folder, create a new folder called __Components__ and add __Scoreboard.js__ in it. Add some contents(`h2`) with two buttons(plus & minus).
- import the Scoreboard component in App.js. 
  
### Next Step: Create & Provide a Context 
- Inside the __src__ folder, create a new folder called __Contexts__ and add __ScoreContext.js__ in it. Note that we initialize a context in a separate file, for we reuse it acrossed the entire app. 
  
#### In ScoreContext.js: 
  - Import `useState` and `createContext` from react
  - Create and export a context called 'ScoreContext'
  - Create a context provider called 'ScoreContextProvider'. In it, declare a state variable called 'score' with an initial value of 0, and
    write two functions:
    `plusScore(): score + 10`,
    `minusScore(): score - 10`
  - By using the 'value' prop, make these three ('score', 'plusScore', 'minusScore') accessible from child components.
  
#### In App.js:  
  - Import 'ScoreContextProvider' from the __context__ folder.
  - To make the context accessible to child components, wrap App with 'ScoreContextProvider'.
  
#### In Scoreboard.js:
  - Import `useContext` from react.
  - Import 'ScoreContext' from the __Contexts__ folder.
  - access the value passed down from the context. Use 'score' for h2, add each button an event plusScore/minusScore on click.
  
  ## Bonus Task
  - Inside the __Components__ folder, create __Infoboard.js__.
  - Add `h3` "Let's make it over 100!"
  - The content should change to "Good job!" once the score is over 100. Utilize 'score' from the context.
  
  

