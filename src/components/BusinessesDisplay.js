import React, { Component } from 'react'
import { getFavorites } from '../fetch-utils.js';
import Business from './Business.js';

export default class BusinessesDisplay extends Component {
    
    state = {
        businesses: []
    }

    getFavoritedBusinesses = async () => {
        const {
            token,
            businesses
        } = this.props;
        const favorites = await getFavorites(token);
        let modifiedBusinesses = businesses.map(business => {
            let isFavorited = false;
            favorites.forEach((favorite) => {
              if(favorite.id === business.id) {
                isFavorited = true;
              }
            });
            return {
                ...business,
                favorited: isFavorited
            }
        });
        this.setState({ businesses: modifiedBusinesses });

    }

    componentDidMount = async () => {
        await this.getFavoritedBusinesses();
    }

    refreshBusinesses = async() => {
        this.getFavoritedBusinesses();
    }

    render() {
        const { favorites, token } = this.props;
        const { businesses } = this.state;
        return (
            <div className="businesses-display">
                {businesses.map(business => <Business token={token} business={business} refreshBusinesses={this.refreshBusinesses} />)}
            </div>
        )
    }
}
