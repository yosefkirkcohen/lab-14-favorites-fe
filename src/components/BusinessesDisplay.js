import React, { Component } from 'react'
import Business from './Business.js';

export default class BusinessesDisplay extends Component {
    
    render() {
        const { businesses, favorites, token } = this.props;
        return (
            <div className="businesses-display">
                {businesses.map(business => <Business  businesses={businesses} token={token} favorites={favorites} business={business} />)}
            </div>
        )
    }
}
