import React, { Component } from 'react';

export default class Profile extends Component {
    render() {
        // Destructuring assignment
        const { name, hobby } = this.props.profileInfo;

        return (
            <div>
                <h1>Profile</h1>
                <p>Hello {name}.</p>
                <p>My hobby is {hobby}.</p>
            </div>
        );
    }
}