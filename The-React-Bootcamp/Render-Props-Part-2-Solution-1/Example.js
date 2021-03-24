import React from "react"

function Example(props) {
    return (
        <div>
            {props.render(6)}
        </div>
    )
}

export default Example