import React from "react"
import Shuffle from "./Shuffle"
import {nanoid} from "nanoid"

export default function Quiz(props){

    const [answerData, setAnswerData] = React.useState([
        {
            answer: props.correctAnswer,
            correct: true,
            selected: false,
            id: nanoid()
        },
        {
            answer: props.incorrectAnswers[0],
            correct: false,
            selected: false,
            id: nanoid()
        },
        {
            answer: props.incorrectAnswers[1],
            correct: false,
            selected: false,
            id: nanoid()
        },
        {
            answer: props.incorrectAnswers[2],
            correct: false,
            selected: false,
            id: nanoid()
        }
    ])

    function handleClick(id) {
        setAnswerData(prevData => {
            return prevData.map(answer => {
                return answer.id === id ? {...answer, selected: !answer.selected} : {...answer, selected: false}
            })
        })
    }


    function makeButtons() {
        return answerData.map(answer => {
        
            return (
                <button 
                className={`answer-button ${answer.selected ? "answer--selected" : ""}`}
                correct={answer.correct ? 1 : 0}
                selected={answer.selected ? 1 : 0}
                key={nanoid()}
                id={answer.id}
                onClick={() => handleClick(answer.id)}
                > {answer.answer}
                </button>
            )
        })
    }


    return (
        <div className="quiz">
            <h4 className="quiz--title">
                {props.question} 
            </h4>
            <div className="quiz--buttons">
                {makeButtons()}
            </div>
            <hr className="line-break"></hr>
        </div>
    )
}