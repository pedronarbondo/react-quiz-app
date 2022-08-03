import React from "react"
import Quiz from "./components/Quiz"

function App() {
  
  React.useEffect(() => {
  fetch("https://opentdb.com/api.php?amount=5")
    .then(res => res.json())
    .then(data => setData(data.results))
    console.log(data)
  },[])

  const [data, setData] = React.useState([])
  const [quizzes, setQuizzes] = React.useState({})
  const [playing, setPlaying] = React.useState(false)

  function startGame() {
    setPlaying(prevPlaying => !prevPlaying)

    data.map(dataPoint => {
      setQuizzes({
        question: dataPoint.question,
        correctAnswer: dataPoint.correct_answer,
        incorrectAnswers: dataPoint.incorrect_answers,
        difficulty: dataPoint.difficulty
      })
    })
  }




  
  return (
    playing ?
    <div className="main">
      <div className="quiz--holder">
        <Quiz />
        <Quiz />
        <Quiz />
        <Quiz />
        <Quiz />
      </div>
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
