import React, { Component } from 'react';
import Table from '../../components/table/Table';

export default class Cities extends Component {
    render() {
        const rows = [{id: 1, city: "Copenhagen"}, {id: 2, city: "Paris"}];

        return (
            <div>
                <Table columns={["ID", "City"]} rows={rows} />
            </div>
        );
    }
}
