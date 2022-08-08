import React from "react"
import Main from "./components/Main"
import { nanoid } from "nanoid"

function App() {
  const [playing, setPlaying] = React.useState(false)  
  const [apiData, setApiData] = React.useState()

    React.useEffect(() => {
        fetch("https://opentdb.com/api.php?amount=5&type=multiple")
        .then(res => res.json())
        .then(data => setApiData(data.results))
      }, [])
    
  function startGame() {
    setPlaying(prevPlaying => !prevPlaying)
  }
  
  
  return (
    playing ?
    <div className="main">
      <Main 
        data={apiData}
      />
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
