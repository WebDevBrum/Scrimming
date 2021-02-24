import React from 'react';

import Joke from './Joke'

function App() {
    return (
        <div className="container">
            <Joke punchline="It’s hard to explain puns to kleptomaniacs because they always take things literally."/>
            <Joke question="What do you call a three eyed dinosaur?" punchline="do you think he saw us"/>
            <Joke question="What did the cow say to the sheep?" punchline="Moove over"/>
            <Joke question="What a cats favourite color?" punchline="purple"/>
            <Joke question="What do dogs borrow to do DIY?" punchline="Toads tools"/>
        </div>
    )
}

export default App;