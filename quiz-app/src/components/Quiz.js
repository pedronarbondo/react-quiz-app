import React from "react"
import Shuffle from "./Shuffle"
import { nanoid } from "nanoid"

export default function Quiz(props) {
    const { question, answers, difficulty } = props
    const allAnswers = 
    [
        {
            answer: answers.correctAnswer,
            correct: true
        },
        {
            answer: answers.incorrectAnswers[0],
            correct: false
        },
        {
            answer: answers.incorrectAnswers[1],
            correct: false
        },
        {
            answer: answers.incorrectAnswers[2],
            correct: false
        },
    ]
    const allAnswersShuffled = Shuffle(allAnswers)
    const answerButtons = allAnswersShuffled.map(answer => {
        return (
                <button 
                    className="button--answer"
                    key={nanoid()}
                >
                    {answer.answer}
                </button>
        )
    })

    return (
        <div className="quiz">
            <h2 className="quiz--question">{question}</h2>
            <div>{answerButtons}</div>
            <hr className="line-break"></hr>
        </div>
    )
}