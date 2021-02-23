import React from 'react';

function App() {
    return (
        <div>
            <input type="checkbox"/>
            <span>Note 1</span>
            <input type="checkbox" name="item2"/>
            <label htmlFor="item2">Note 2</label>
            <input type="checkbox"/>
            <span>Note 3</span>
            <input type="checkbox"/>
            <span>Note 4</span>
        </div>
    );
}

export default App;