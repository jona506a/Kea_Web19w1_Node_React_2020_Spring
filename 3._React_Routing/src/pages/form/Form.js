import React, { Component } from 'react';

export default class Form extends Component {
    state = {
        firstName: "",
        lastName: ""
    }

    handleInputChange = (event) => {
        this.setState({[event.target.id]: event.target.value });
    }

    onFormSubmit = () => {
        const { firstName, lastName } = this.state;

        this.props.handleNameChange(firstName, lastName);
        this.props.history.push("/");
    }

    render() {        
        return (
            <div>
                <input id="firstName" placeholder="First name" onChange={this.handleInputChange} />
                <input id="lastName" placeholder="Last name" onChange={this.handleInputChange} />
                <button onClick={this.onFormSubmit}>Submit</button>
            </div>
        );
    }
}