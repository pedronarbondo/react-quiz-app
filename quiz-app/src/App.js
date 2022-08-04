import React from "react"
import {nanoid} from "nanoid"

function App() {
  const [playing, setPlaying] = React.useState(false)

  function startGame() {
    setPlaying(prevPlaying => !prevPlaying)
  }
  
  return (
    playing ?
    <div className="main">
    </div>
    : 

    <div className="main">
        <div className="no-quiz">
          <h1>Random Quiz App</h1>
          <h4>Press start quiz to start playing</h4>
          <button 
            className="start-game"
            onClick={startGame}
            >Start quiz</button>
        </div>
    </div>
  )
}

export default App;
