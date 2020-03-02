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
                        <tr>
                            {
                                rows.map((row, index) => {
                                    return columns.map(column => {
                                        return (<td key={column + index} >{row[column.toLowerCase()]}</td>);
                                    })
                                })
                            }
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}
