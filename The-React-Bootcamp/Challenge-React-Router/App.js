import React from "react"
import {Switch, Route, Link} from "react-router-dom"

import Home from "./Home"
import About from "./About"
import Contact from "./Contact"
import Nav from "./Nav"

function App() {    
    return (
        <div>
            <Nav />
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route path="/about">
                    <About/>
                </Route>
                <Route path="/contact">
                    <Contact/>
                </Route>
            </Switch>
        </div>
    )
}

export default App