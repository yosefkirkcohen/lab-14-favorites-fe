import React, { Component } from 'react'

export default class BusinessesDisplay extends Component {
    
    render() {
        const { businesses } = this.props;
        return (
            <div className="businesses-display">
                {businesses.map(business => <Business business={business} />)}
            </div>
        )
    }
}
