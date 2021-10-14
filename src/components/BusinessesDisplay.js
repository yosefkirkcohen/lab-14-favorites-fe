import React, { Component } from 'react'
import Business from './Business.js';

export default class BusinessesDisplay extends Component {
    
    render() {
        const { businesses } = this.props;
        return (
            <div className="businesses-display">
                {businesses.map(business => <Business token={this.props.token} favorites={this.props.favorites} business={business} />)}
            </div>
        )
    }
}
