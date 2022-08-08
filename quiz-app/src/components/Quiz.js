import React from "react"
import { nanoid } from "nanoid"

//process quiz data in parent component, and shuffle question order there.
//make "selected" a property on each quiz so that when it changes, it will only re render 
//that quiz. DO NOT pass "selected" as a prop. 


export default function Quiz(props) {
    const { quizData } = props 
    const [quiz, setQuiz] = React.useState(quizData)

    const buttons = 
    quiz.options.map(option => {
        return (
            <div 
                key={nanoid()}>
                <button 
                    className={`button--answer ${option.selected ? "selected" : ""}`}
                    id={option.id}
                    onClick={() => toggle(option.id)}
                    >
                    {option.option}
            </button>

            </div>
        )
    })
    console.log(quiz)
    
    function toggle(id) {
        console.log(id)
    }


    return (
        <div className="quiz">
            <h3 className="quiz--title">{quiz.question}</h3>
            <div className="answer-button-holder">
                {buttons}
            </div>
            <hr className="line-break"></hr>
        </div>
    )
    
}