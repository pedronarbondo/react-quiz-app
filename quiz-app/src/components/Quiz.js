import React from "react"
import Shuffle from "./Shuffle"
import { nanoid, random } from "nanoid"
import Answer from "./Answer"

export default function Quiz(props) {
    const { id, question, options, difficulty, toggle } = props     
    const randomOrderOptions = Shuffle(options)
    const answerButtons = 
    randomOrderOptions.map(option => {
        return (
            <button 
                className={`button--answer ${option.selected ? "green" : ""}`}
                key={nanoid()}
                onClick={() => toggle(option.id)}
                >{option.option}</button>
        )
    })


    return (
        <div className="quiz">
            <h3 className="quiz--question">{question}</h3>
            <div className="quiz--answerHolder">
                {answerButtons}
            </div>
            <hr className="line-break"></hr>
        </div>
    )
}