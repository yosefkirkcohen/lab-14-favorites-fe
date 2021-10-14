import React, { Component } from 'react'
import BusinessesDisplay from './components/BusinessesDisplay';
import { searchBusinesses } from './fetch-utils';

export default class SearchPage extends Component {
    state = {
        businesses: [],
        business: '',
        query: '',
        locationString: '',
        favorites: ''
    }
    handleSubmit = async e => {
        e.preventDefault();
        const { query, locationString } = this.state;
        const businesses = await searchBusinesses(query, locationString, this.props.token)
        this.setState( { businesses } )
    }
    
    render() {
        const { businesses, favorites } = this.state;
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
            {/* {console.log(businesses)} */}
            {   !!businesses 
               ? <BusinessesDisplay  businesses={businesses} favorites={favorites}/>
               : <div>Results</div> }

            </div>
        )
    }
}
