import React, { Component } from 'react';

export default class Table extends Component {
    render() {
        const { columns, rows } = this.props;

        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            { 
                                columns.map((column, index) => (<th key={"table-header"+index}>{column}</th>)) 
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            rows.map((row, index) => (
                                <tr key={"table-row"+index}>
                                { columns.map(column => (
                                    <td key={column + index} >{row[column]}</td>
                                ))}
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}
