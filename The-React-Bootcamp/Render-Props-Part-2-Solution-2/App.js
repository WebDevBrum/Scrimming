import React from "react"
import Example from "./Example"

function App() {
    return (
        <div>
            <Example render={
                function(dataArray){
                    return (
                        <ul>
                            <li>{dataArray[0]}</li>
                            <li>{dataArray[1]}</li>
                            <li>{dataArray[2]}</li>
                        </ul>
                    )
                }
            }/>
        </div>
    )
}

export default App