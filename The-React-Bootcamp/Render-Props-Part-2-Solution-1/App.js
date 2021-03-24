import React from "react"
import Example from "./Example"

function App() {
    return (
        <div>
            <Example render={
                function(number) {
                    return (
                        <h1>{number > 5 ? "Hi five" : "Boo hoo"}</h1>
                    )
                }
            }/>
        </div>
    )
}

export default App