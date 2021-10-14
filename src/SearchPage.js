import { Button, TextField } from '@mui/material';
import React, { Component } from 'react'
import BusinessesDisplay from './components/BusinessesDisplay';
import { searchBusinesses } from './fetch-utils';

export default class SearchPage extends Component {
    state = {
        businesses: [],
        business: '',
        query: '',
        location: ''
    }

    handleSubmit = async e => {
        e.preventDefault();
        const { query, locationString } = this.state;
        const businesses = await searchBusinesses(query, locationString, this.props.token)
        this.setState( { businesses } )
    }
    
    handleQueryChange = e => {
        this.setState({ query: e.target.value})
    }

    handleLocationChange = e => {
        this.setState({ location: e.target.value });
    }

    render() {
        const {
            businesses,
            query,
            location
        } = this.state;
        return (
            <div className="search-page-div">
                <div className="search-input-div">
                    <TextField
                        label="Search Term"
                        value={query}
                        onChange={this.handleQueryChange}
                        variant="standard"
                        size="small"
                    />
                    <TextField
                        label="Location"
                        value={location}
                        onChange={this.handleLocationChange}
                        variant="standard"
                        size="small"
                    />
                    <Button variant="outlined" onClick={this.handleSubmit} size="small">Search</Button>
                </div>
                {   businesses.length > 0
                ? <BusinessesDisplay businesses={businesses}/>
                : <div>No Results</div> }

            </div>
        )
    }
}
