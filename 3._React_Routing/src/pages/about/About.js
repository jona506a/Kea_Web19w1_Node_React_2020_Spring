import React, { Component } from 'react';

export default class About extends Component {
    handleRedirect = () => {
        this.props.history.push("/");
    }

    render() {

        return (
            <div>
                <h1>This is the about page</h1>
                <button onClick={this.handleRedirect}>Redirect to home</button>
            </div>
        );
    }
}