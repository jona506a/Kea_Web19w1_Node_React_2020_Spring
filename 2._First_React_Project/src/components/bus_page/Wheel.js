import React, { Component } from 'react';

export default class Wheel extends Component {
    render() {
        const { wheelText } = this.props;

        return (
            <div>
                <div>{wheelText}</div>
            </div>
        );
    }
}