import React from "react"
import Quiz from "./components/Quiz"
import {nanoid} from "nanoid"
import Shuffle from "./components/Shuffle"

function App() {
  
  React.useEffect(() => {
  fetch("https://opentdb.com/api.php?amount=5")
    .then(res => res.json())
    .then(datas => setData(datas.results))
  },[])

  const [playing, setPlaying] = React.useState(false)
  const [data, setData] = React.useState([])
  const [myQuiz, setMyQuiz] = React.useState([])



 function setupQuizData(){
    return (
      data.map(datapoint => {
        setMyQuiz(prevQuestions => {
          return [...prevQuestions, {
            question: datapoint.question,
            correctAnswer: datapoint.correct_answer,
            incorrectAnswers: datapoint.incorrect_answers,
            difficulty: datapoint.difficulty,
            id: nanoid()
          }]
        })
      })
    )
  }


  function setupQuiz() { 
      Shuffle(myQuiz)
      return myQuiz.map(quiz => {
        return (
            <Quiz 
            question={quiz.question}
            correctAnswer={quiz.correctAnswer}
            incorrectAnswers={quiz.incorrectAnswers}
            difficulty={quiz.difficulty}
            key={quiz.id}/>
        )
    })
  }
  
  function startGame() {
    setPlaying(prevPlaying => !prevPlaying)
    setupQuizData()
  }
  
  return (
    playing ?
    <div className="main">
      <div className="quiz--holder">
       {setupQuiz()}
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
