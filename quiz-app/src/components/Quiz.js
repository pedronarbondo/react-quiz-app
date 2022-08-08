import React from "react"
import { nanoid } from "nanoid"

//process quiz data in parent component, and shuffle question order there.
//make "selected" a property on each quiz so that when it changes, it will only re render 
//that quiz. DO NOT pass "selected" as a prop. 


export default function Quiz(props) {


    const { quizData } = props 
    const [quiz, setQuiz] = React.useState(quizData)


    function toggle(id) {
        return quiz.showAnswer ? console.log("already submitted") : 
        setQuiz(prevQuiz => {
            const newOptions = []
            prevQuiz.options.map(option => {
                option.id === id ? 
                newOptions.push({...option, selected: !option.selected}):
                newOptions.push({...option, selected: false})
            })
            return {
                ...prevQuiz, options: newOptions
            }
        })
    }

    function handleSubmit() {
        setQuiz(prevQuiz => {
            return {
                ...prevQuiz,
                showAnswer: true
            }
        })
    }

    function revealColor(option) {
        
        if (quiz.showAnswer && option.correct) {
            return "correct"
        }
        else if (quiz.showAnswer && option.incorrect) {
            return "incorrect"
        }
    }

    const buttons = 
    quiz.options.map(option => {
        return (
            <div 
                key={nanoid()}>
                <button 
                    className=
                    {
                        `button--answer ${option.selected ? "selected" : ""}
                        ${revealColor(option)}    
                    `
                    }
                    id={option.id}
                    onClick={() => toggle(option.id)}
                    >
                    {option.option}
            </button>

            </div>
        )
    })
    return (
        <div className="quiz">
            <h3 className="quiz--title">{quiz.question}</h3>
            <div className="answer-button-holder">
                {buttons}
            </div>
            <div className="submit--holder">
                <button className="submit--button" onClick={handleSubmit}>Submit answer</button>
                <h3 
                    className="result"
                    style={quiz.showAnswer ? {display: "block"} : {display: "none"}}
                    >
                {
                    quiz.options[0].correct && quiz.options[0].selected ||
                    quiz.options[1].correct && quiz.options[1].selected ||
                    quiz.options[2].correct && quiz.options[2].selected ||
                    quiz.options[3].correct && quiz.options[3].selected
                    ?
                "✔️ Correct!" : 
                "❌ Incorrect"
            }
            </h3>
                
            </div>
            <hr className="line-break"></hr>
        </div>
    )
}