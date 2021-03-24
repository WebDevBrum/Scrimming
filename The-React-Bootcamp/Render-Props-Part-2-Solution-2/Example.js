import React from "react"

function Example(props) {
    return (
        <div>
             {props.render(["one banana", "two banana", "three banana"])}
        </div>
    )
}

export default Example