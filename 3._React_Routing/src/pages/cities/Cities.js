import React, { Component } from 'react';
import Table from '../../components/table/Table';
import { BarLoader } from 'react-spinners';

export default class Cities extends Component {
    state = {
        cities: [],
        loading: true
    }

    async componentDidMount() {
        const res = await fetch("https://indian-cities-api-nocbegfhqg.now.sh/cities");
        const cities = await res.json();

        this.setState({ cities, loading: false });
    }

/*     componentDidMount() {
        fetch("https://indian-cities-api-nocbegfhqg.now.sh/cities")
            .then(res => res.json())
            .then(cities => this.setState({ cities, loading: false }));
    } */


    render() {
        const { cities, loading } = this.state;
        //const rows = [{id: 1, city: "Copenhagen"}, {id: 2, somethingSecret: "password"}];

        return (
            <div>
                { loading ?
                    <BarLoader loading={loading} />
                :
                    <Table columns={["City", "State", "District"]} rows={cities} />
                }
            </div>
        );
    }
}
