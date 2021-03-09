import React from 'react';

class MemeGenerator extends React.Component {
    constructor(){
        super();
        this.state = {
            test: "testing state"
        }
    }

render() {
    return(
        <h2>{this.state.test}</h2>
    )
}

}

export default MemeGenerator;