import React, { Component } from 'react';

export default class Form extends Component {
    state = {
        firstName: "",
        lastName: ""
    }

    handleInputChange = (event) => {
        this.setState({[event.target.id]: event.target.value });
    }

    render() {
        const { firstName, lastName } = this.state;
        const { handleNameChange } = this.props;
        
        return (
            <div>
                <input id="firstName" placeholder="First name" onChange={this.handleInputChange} />
                <input id="lastName" placeholder="Last name" onChange={this.handleInputChange} />
                <button onClick={() => handleNameChange(firstName, lastName)}>Submit</button>
            </div>
        );
    }
}