import React from "react"
import {ThemeContextConsumer} from "./themeContext"

function Button(props) {
    return (
        <ThemeContextConsumer>
            {theme => (
                <button className={`${theme.theme}-theme`} onClick={theme.changeTheme}>Switch Theme</button>
            )}
        </ThemeContextConsumer>
    )    
}

export default Button
