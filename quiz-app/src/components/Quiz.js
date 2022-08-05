import React from "react"
import Shuffle from "./Shuffle"
import { nanoid } from "nanoid"
import Answer from "./Answer"

export default function Quiz(props) {
    const { id, question, options, difficulty, toggle } = props 
    const shuffledOptions = Shuffle(options)

    return (
        <div className="quiz">
            <h1 className="quiz--question">{question}</h1>
        </div>
    )
}