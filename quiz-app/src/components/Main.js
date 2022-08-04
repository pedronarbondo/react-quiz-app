import React from "react"
import Quiz from "./Quiz"
import Shuffle from "./Shuffle"
import { nanoid } from "nanoid"


export default function Main(props) {
    const { questions } = props

     const mappedQuestions= questions.map(question => {
            return (
                <Quiz 
                    question={question.question}
                    answers={question.answers}
                    difficulty={question.difficulty}
                    key={nanoid()}
                />
            )
        })

    return (
        <div className="quiz--container">
            {mappedQuestions}
        </div>
    )
}
