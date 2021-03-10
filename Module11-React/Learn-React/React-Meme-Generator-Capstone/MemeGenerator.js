import React, {Component} from "react"

class MemeGenerator extends Component {
    constructor() {
        super()
        this.state = {
            topText: "",
            bottomText: "",
            randomImg: "http://i.imgflip.com/1bij.jpg",
            allMemeImgs: []
        }
    }
    
    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => {
                const {memes} = response.data
                console.log(memes[0])
                this.setState({ allMemeImgs: memes })
            })
    }
    
    render() {
        return (
            <div>
                <form className="meme-form">
                    {
                        /**
                         * Create 2 input fields, one for the topText and one for the bottomText
                         * Remember that these will be "controlled forms", so make sure to add
                         * all the attributes you'll need for that to work
                         */
                    }  
                    <label> 
                    Top text: 
                        <input type="text" name="topText" value={this.state.topText} onChange={console.log("text")}/>
                    </label>
                    <label>
                    Bottom text:
                        <input type="text" name="bottomText" value={this.state.bottomText} onChange={console.log("text")} />
                    </label>
                    <button>Gen</button>
                </form>
            </div>
        )
    }
}

export default MemeGenerator