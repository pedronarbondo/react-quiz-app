import React from "react"
import Shuffle from "./Shuffle"
import { nanoid } from "nanoid"
import Answer from "./Answer"

export default function Quiz(props) {
    const { question, answers, difficulty, selected } = props
    const [allAnswers, setAllAnswers] = React.useState(
    [
        {
            id: nanoid(),
            answer: answers.correctAnswer,
            correct: true, 
            selected: false
        },
        {
            id: nanoid(),
            answer: answers.incorrectAnswers[0],
            correct: false, 
            selected: false
        },
        {
            id: nanoid(),
            answer: answers.incorrectAnswers[1],
            correct: false, 
            selected: false
        },
        {
            id: nanoid(),
            answer: answers.incorrectAnswers[2],
            correct: false, 
            selected: false
        },
    ]
)


    const allAnswersShuffled = Shuffle(allAnswers)
    const answerButtons = allAnswersShuffled.map(answer => {
        return (
            <Answer 
            content={answer.answer}
            selected={answer.selected}
            key={answer.id}/>
        )
    })

    return (
        <div className="quiz">
            <div>
                <h2 className="quiz--question">{question}</h2>
            </div>
            <div>{answerButtons}</div>
            <hr className="line-break"></hr>
        </div>
    )
}