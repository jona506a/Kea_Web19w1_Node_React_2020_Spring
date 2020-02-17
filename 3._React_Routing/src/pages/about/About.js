import React, { Component } from 'react';

export default class About extends Component {
    render() {
        console.log("111111 ", this.props);

        return (
            <h1>This is the about page</h1>
        );
    }
}