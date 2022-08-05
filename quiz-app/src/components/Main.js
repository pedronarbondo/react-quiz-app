import React from "react"
import Quiz from "./Quiz"
import Shuffle from "./Shuffle"
import { nanoid } from "nanoid"


export default function Main(props) {
    const { questions } = props
    const [allAnswers, setAllAnswers] = React.useState([{}])
    const myQuiz = 
        questions.map(question => {
                return {
                    id: nanoid(),
                    key: nanoid(),
                    title: question.question,
                    options: 
                    [
                        {
                            option: question.answers.correctAnswer,
                            correct: true,
                            selected: false,
                            id: nanoid()
                        },
                        {
                            option: question.answers.incorrectAnswers[0],
                            correct: false,
                            selected: false,
                            id: nanoid()
                        },
                        {
                            option: question.answers.incorrectAnswers[1],
                            correct: false,
                            selected: false,
                            id: nanoid()
                        },
                        {
                            option: question.answers.incorrectAnswers[2],
                            correct: false,
                            selected: false,
                            id: nanoid()
                        },
                    ],
                    selectedAnswer: "",
                    difficulty: question.difficulty
        
                }}
        )
    function toggle(id) {
        myQuiz.map(quiz => {
           return {
            [quiz.options.id]: id ? {...quiz, selected: !quiz.options.selected} : {...quiz, selected: false}
           }
        })
    }

    const quiz = 
    myQuiz.map(quiz => {
        return (
            <Quiz 
                id={quiz.id}
                key={quiz.key}
                question={quiz.title}
                options={quiz.options}
                difficulty={quiz.difficulty}
                toggle={toggle}
            />
        )
    })

    return (
        <div className="main">
            <div className="quiz--container">
                {quiz}
            </div>
            <button 
                className="submit-button"
                >Submit answers</button>
        </div>
    )
}
