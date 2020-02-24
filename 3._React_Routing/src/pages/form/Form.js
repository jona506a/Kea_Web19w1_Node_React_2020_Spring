import React, { Component } from 'react';

export default class Form extends Component {
    render() {
        return (
            <div>
                <input placeholder="First name" />
                <input placeholder="Last name" />
                <button>Submit</button>
            </div>
        );
    }
}