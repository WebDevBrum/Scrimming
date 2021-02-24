import React from 'react';

function Joke(props) {
    return (
        <div className="joke-card">
            <p style={{display: props.question ? "block" : "none"}}>Joke: {props.question}</p>
            <p>Punchline: {props.punchline}</p>
        </div>
    )
}

export default Joke;