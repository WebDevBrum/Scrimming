import React, {Component} from "react"
import UserContext from "./userContext";

class Header extends Component {
    render() {
        
        const name = this.context;
        
        return (
            <header>
                <p>Welcome, {name}!</p>
            </header>
        )    
    }
}

Header.contextType = UserContext;
export default Header
