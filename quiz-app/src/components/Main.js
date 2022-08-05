import React from "react"
import Quiz from "./Quiz"
import Shuffle from "./Shuffle"
import { nanoid } from "nanoid"


export default function Main(props) {
    const { questions } = props
    const [allAnswers, setAllAnswers] = React.useState([{}])
    
    React.useEffect(() => {
        return (
            setAllAnswers(questions.map(question => {
                return {
                    id: nanoid(),
                    key: nanoid(),
                    title: question.question,
                    options: 
                    [
                        {
                            correctAnswer: question.answers.correctAnswer,
                            selected: false
                        },
                        {
                            incorrectAnswer1: question.answers.incorrectAnswers[0],
                            selected: false
                        },
                        {
                            incorrectAnswer1: question.answers.incorrectAnswers[1],
                            selected: false
                        },
                        {
                            incorrectAnswer1: question.answers.incorrectAnswers[2],
                            selected: false
                        },
                    ],
                    selectedAnswer: "",
                    difficulty: question.difficulty
        
                }
            }))
        )
    }, [])

    function toggle(id) {
        console.log(id)
    }

    const myQuiz = 
    allAnswers.map(quiz => {
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

            </div>
            <button 
                className="submit-button"
                >Submit answers</button>
        </div>
    )
}
