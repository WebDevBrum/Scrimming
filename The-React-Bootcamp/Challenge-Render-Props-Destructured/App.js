import React from "react"
import DataFetcher from "./DataFetcher"

function App() {    
    return (
        // destructured obj.data etc
        <div>
            <DataFetcher url="https://swapi.co/api/peole/1">
                {({data, loading}) => ( 
                    loading ? 
                    <h1>Loading...</h1> :
                    <p>{JSON.stringify(data)}</p>
                )}
            </DataFetcher>
        </div>
    )
}

export default App