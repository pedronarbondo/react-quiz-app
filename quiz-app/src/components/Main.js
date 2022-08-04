import React from "react"
import { nanoid } from "nanoid"
import Quiz from "./Quiz"
import Shuffle from "./Shuffle"

export default function Main(props){
        return props.quiz.map(quiz => {
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

