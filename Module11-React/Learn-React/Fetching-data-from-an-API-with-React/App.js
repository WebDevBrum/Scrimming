import React, {Component} from "react"

// https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch
// https://swapi.co/
// https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-promise-27fc71e77261

class App extends Component {
    constructor() {
        super()
        this.state = {
            loading: false,
            info: {}
        }
    }
    
    // Obvious alternative is Async/Await
    componentDidMount() {
        this.setState({loading: true})
        fetch("https://swapi.dev/api/people/4/")
            .then(response => response.json())
            .then(data => 
                this.setState({
                    loading: false,    
                    info: data    
                }))     
    }
    
    render() {
        // OR const text = this.state.loading ? "...loading" : this.state.info.name;      
        return (
            <div>
                <h1>{this.state.loading ? "...loading" : this.state.info.name}</h1>
            </div>
        )
    }
}

export default App
