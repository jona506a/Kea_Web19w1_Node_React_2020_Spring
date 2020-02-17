import React, { Component } from 'react';
import "./Button.css";

export default class ButtonWithProps extends Component {
    render() {
        const { buttonText, customStyle, onButtonClicked } = this.props;

        return (
            <button className="button-with-props" 
                style={ customStyle }
                onClick={onButtonClicked}
            >
                { buttonText ? buttonText : "Click"}
            </button>
        );
    }
} 
