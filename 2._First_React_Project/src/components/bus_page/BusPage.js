import React, { Component } from 'react';
import Wheel from './Wheel';

export default class BusPage extends Component {
    render() {
        const wheels = ['wheel one', 'wheel two', 'wheel three', 'wheel four'];

        return (
            <div>
                <h1>This is a bus</h1>
                {wheels.map((wheel, index) => {
                    return <Wheel key={'wheel' + index} wheelText={wheel} />
                })}
            </div>
        );
    }
}