import React, { Component } from 'react';

export default class Theme extends Component {
/*     constructor(props) {
        super(props); */
        state = {
            color: undefined
        };
/*     } */

    render() {
        return (
            <div>
                <input type="color" onChange={(event) => this.setState({ color: event.target.value })}/>
                <button onClick={() => console.log("Button was clicked", this.state.color)} >Submit theme color</button>
            </div>
        );
    }
}