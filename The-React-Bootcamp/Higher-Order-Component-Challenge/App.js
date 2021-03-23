import React from "react"
import {withFavoriteNumber} from "./withFavoriteNumber.js"

function App(props) {
    return (
        <div>{props.favoriteNumber}</div>
    )
}

const AddedFavorite = withFavoriteNumber(App)
export default AddedFavorite