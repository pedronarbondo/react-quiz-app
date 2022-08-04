import React from "react"

export default function Answer(props) {
    const { content, selected } = props
    const [select, setSelect] = React.useState(selected)

    function toggle() {
        setSelect(prevSelect => !prevSelect)
    }

    return (
        <button 
            className={`button--answer ${select ? "selected" : ""}`}
            onClick={toggle} 
        >
            {content}
        </button>
)
}