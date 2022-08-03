import React from "react"

export default function Quiz(props){

    return (
        <div className="quiz">
            <h4 className="quiz--title">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, sed?
            </h4>
            <div className="quiz--buttons">
                <button className="answer-button">Option 1</button>
                <button className="answer-button">Option 2</button>
                <button className="answer-button">Option 3</button>
                <button className="answer-button">Option 4</button>
            </div>
            <hr className="line-break"></hr>
        </div>
    )
}