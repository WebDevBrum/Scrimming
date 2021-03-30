import React from "react"

import Header from "./Header"
import UserContext from "./userContext";


class App extends React.Component {
     
     
    render() {
        const name = this.context;
        
        return (
            <div>
                <Header />
                <main>
                    <p className="main">No new notifications, {name}! 🎉</p>
                </main>
            </div>
    )}      
}

App.contextType = UserContext;

export default App