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
        const { query, locationString } = this.state;
        const businesses = await searchBusinesses(query, locationString, this.props.token)
        this.setState( { businesses } )
    }
    
    render() {
        const { businesses } = this.state;
        return (
            <div>
                 <form onSubmit={this.handleSubmit}>
                    <label>Search
                    <input required onChange={e => this.setState({ query: e.target.value}) }
                    /></label>
                    <label>City
                    <input required onChange={e => this.setState({ locationString: e.target.value}) }
                    /></label>
                    <button>Submit</button>
                </form>
            {   businesses.length !== 0 
               ? <Business  businesses={businesses}/>
               : <div>Results</div> }

            </div>
        )
    }
}
