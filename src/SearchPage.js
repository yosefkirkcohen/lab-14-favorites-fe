import React, { Component } from 'react'
import request from 'superagent';
import Business from './components/Business';

export default class SearchPage extends Component {
    state = {
        businesses: [],
        business: '',
        query: ''
    }
    handleSubmit = async e => {
        e.preventDefault();
        const businesses = await businessSearch(this.state.query)
        this.setState( businesses )
    }
    
    render() {
        return (
            <div>
                 <form onSubmit={this.handleSubmit}>
                    <label></label>
                    <input onChange={e => this.setState({ query: e.target.value}) }
                    />
                    <button>Search</button>
                </form>
            <Business  businesses={this.state.businesses}/>

            </div>
        )
    }
}
