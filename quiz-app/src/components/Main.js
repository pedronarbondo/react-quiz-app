import React from "react"
import Quiz from "./Quiz"
import { nanoid } from "nanoid"
import Shuffle from "./Shuffle"


export default function Main(props) {
    const { data } = props
    const questionnaire = 
    data.map(datapoint => {
        return (
            {
                question: datapoint.question,
                options: 
                [
                    {
                        option: datapoint.correct_answer,
                        correct: true,
                        selected: false,
                        id: nanoid()
                    },
                    {
                        option: datapoint.incorrect_answers[0],
                        correct: false,
                        selected: false,
                        id: nanoid()
                    },
                    {
                        option: datapoint.incorrect_answers[1],
                        correct: false,
                        selected: false,
                        id: nanoid()
                    },
                    {
                        option: datapoint.incorrect_answers[2],
                        correct: false,
                        selected: false,
                        id: nanoid()
                    },
                ],
                difficulty: datapoint.difficulty,
                showAnswer: false
            }
        )
    })
    // this has the options shuffled so that the correct answer is random
    const shuffledQuestionnaire = 
    questionnaire.map(question => {
        return (
            {
                ...question,
                options: Shuffle(question.options)
            }
        )
    })

    const quizzes = 
    shuffledQuestionnaire.map(question => {
        return (
            <Quiz 
            quizData = {question}
            key = {nanoid()}
            className="quiz"
            />
        )
    })

    return (
        <div className="main">
            {quizzes}
            <button className="final-submit-button">Tally correct answers</button>
        </div>
    )
}
