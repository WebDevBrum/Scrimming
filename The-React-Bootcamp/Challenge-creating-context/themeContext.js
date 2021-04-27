import React, {Component} from "react"
const {Provider, Consumer} = React.createContext()

/**
 * Challenge:
 * 1) Add state to hold the current theme
 * 2) Add a method for flipping the state between light and dark
 * 
 */

class ThemeContextProvider extends Component {
   
    /* My solution starts here */
    
    state = {
        theme: "dark"
    }
    
    changeTheme = () => {
        this.setState(prevState => {
            return {
                theme: prevState.theme === "light" ? "dark" : "light"
            }
        })
    }
    
    render() {
        return (
            <Provider value={{theme: this.state.theme, changeTheme: this.changeTheme}} >
                {this.props.children}
            </Provider>
        )
    }
}

export {ThemeContextProvider, Consumer as ThemeContextConsumer}
