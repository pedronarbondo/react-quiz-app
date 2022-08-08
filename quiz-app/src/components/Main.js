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
                        correct: true
                    },
                    {
                        option: datapoint.incorrect_answers[0],
                        correct: false
                    },
                    {
                        option: datapoint.incorrect_answers[1],
                        correct: false
                    },
                    {
                        option: datapoint.incorrect_answers[2],
                        correct: false
                    },
                ],
                difficulty: datapoint.difficulty
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


}
