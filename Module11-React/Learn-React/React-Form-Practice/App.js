import React, {Component} from "react"

/**
 * Challenge: Wire up the partially-finished travel form so that it works!
 * Remember to use the concept of controlled forms
 * https://reactjs.org/docs/forms.html
 * 
 * All information should be populating the text below the form in real-time
 * as you're filling it out
 * 
 * This exercise is adapted from the V School curriculum on vanilla JS forms:
 * https://coursework.vschool.io/travel-form/
 * 
 * All of our challenges and learning resources are open for the public
 * to play around with and learn from at https://coursework.vschool.io
 */

class App extends Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            age: 0,
            gender: "",
            location: "EU",
            vegetarian: "",
            vegan: "",
            glutenfree:"",
            show: false
        }
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    

    
    handleChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const {name} = target;
        
        this.setState({[name] : target.value});
        console.log(this.state);
    }
    
    handleSubmit(event) {
        event.preventDefault();
        this.setState({show: true})
        alert(
            `Name: ${this.state.firstName} ${this.state.lastName} 
Age: ${this.state.age}
Gender: ${this.state.gender}
Location: ${this.state.location}
Dietry: ${this.state.vegan}, ${this.state.vegetarian}, ${this.state.glutenfree}`);
        
    }
   
    
    render() {
        return (
            <main>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="First Name" name="firstName" onChange={this.handleChange}/><br />
                    <input type="text" placeholder="Last Name" name="lastName" onChange={this.handleChange}/><br />
                    <input type="number" placeholder="Age" name="age" onChange={this.handleChange}/><br />
                    <label>
                    <input 
                        type="radio" 
                        name="gender"
                        value="male"
                        checked={this.state.gender === "male"}
                        onChange={this.handleChange}   
                    />Male
                    </label>
                    <br />
                    <label>
                    <input 
                        type="radio" 
                        name="gender"
                        value="female"
                        checked={this.state.gender === "male"}
                        onChange={this.handleChange}   
                    />Female
                    </label>
                    <br />
                    <br />
                    <label>Location</label>
                    <select
                        value={this.state.location}
                        onChange={this.handleChange}
                        name="location"
                    >
                        <option value="EU">EU</option>
                        <option value="USA">USA</option>
                        <option value="SOUTH AMERICA">SOUTH AMERICA</option>
                        <option value="ASIA">ASIA</option>
                        <option value="AFRICA">AFRICA</option>    
                    </select>
                    <br />
                    <h3>Dietry Requirements</h3>
                    <label>
                    <input 
                        type="checkbox" 
                        name="vegetarian"
                        value="veggie"
                        checked={this.state.vegetarian}
                        onChange={this.handleChange}
                    />Vegetarian
                    </label>
                    <br />
                    <label>
                        <input 
                            type="checkbox" 
                            name="vegan"
                            value="vegan"
                            checked={this.state.vegan}
                            onChange={this.handleChange}
                        />Vegan
                    </label>
                    <br />
                    <label>
                        <input 
                            type="checkbox" 
                            name="glutenfree"
                            value="gluten free"
                            checked={this.state.glutenfree}
                            onChange={this.handleChange}
                        />Gluten Free
                    </label>
                    <br />
                    <br /> 
                    <button>Submit</button>
                </form>
                <hr />
                <h2>Entered information:</h2>
                <p>Invisible name: {this.state.show ? this.state.firstName + ' ' + this.state.lastName : null}</p>
                <p>Your name: {this.state.firstName} {this.state.lastName}</p>
                <p>Your age: {this.state.age}</p>
                <p>Your gender: {this.state.gender}</p>
                <p>Your destination: {this.state.location}</p>
                <p>
                    Your dietary restrictions: 
                    {this.state.vegetarian}, {this.state.vegan}, {this.state.glutenfree}
                </p>
            </main>
        )
    }
}

export default App
