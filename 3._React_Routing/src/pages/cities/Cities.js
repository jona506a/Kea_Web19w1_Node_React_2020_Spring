import React, { Component } from 'react';
import Table from '../../components/table/Table';

export default class Cities extends Component {
    componentDidMount() {
        fetch("https://indian-cities-api-nocbegfhqg.now.sh/cities")
            .then(res => res.json())
            .then(response => console.log(response));

    }

    render() {
        const rows = [{id: 1, city: "Copenhagen"}, {id: 2, somethingSecret: "password"}];

        return (
            <div>
                <Table columns={["ID", "City"]} rows={rows} />
            </div>
        );
    }
}
