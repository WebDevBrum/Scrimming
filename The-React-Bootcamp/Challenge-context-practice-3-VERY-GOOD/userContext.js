import React, {Component} from "react"

const {Provider, Consumer} = React.createContext()


class UserContextProvider extends Component {
    state = {
        username: "bob123"
    }
    
    changeUserName = (newUserName) => {
        this.setState({username: newUserName});
    }
    
    render() {
        return (
            <Provider value={{username: this.state.username, changeUserName: this.changeUserName}}>
                {this.props.children}
            </Provider>
        )
    }
}



export {UserContextProvider, Consumer as UserContextConsumer}