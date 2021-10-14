import React, { Component } from 'react'
import Business from './components/Business';
import { searchBusinesses } from './fetch-utils';

export default class SearchPage extends Component {
    state = {
        businesses: [],
        business: '',
        query: '',
        locationString: ''
    }
    handleSubmit = async e => {
        e.preventDefault();
        const businesses = await searchBusinesses(this.state.query, this.state.locationString, this.props.token)
        this.setState( { businesses } )
    }
    
    render() {
        return (
            <div>
                 <form onSubmit={this.handleSubmit}>
                    <label>
                    <input required onChange={e => this.setState({ query: e.target.value}) }
                    /></label>
                    <label>Location
                    <input required onChange={e => this.setState({ locationstring: e.target.value}) }
                    /></label>
                    <button>Search</button>
                </form>
            <Business  businesses={this.state.businesses}/>

            </div>
        )
    }
}
