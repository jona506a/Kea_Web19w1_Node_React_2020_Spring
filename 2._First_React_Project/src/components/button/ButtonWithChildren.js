import React, { Component } from 'react';
import "./Button.css";

export default class ButtonWithChildren extends Component {
    render() {
        const { children } = this.props;
         
        return (
            <button className="button-with-children" >{children || "Click"}</button>
        );
    }
}