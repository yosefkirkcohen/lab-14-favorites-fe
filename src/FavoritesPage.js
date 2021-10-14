import React, { Component } from 'react'
import { getFavorites } from './fetch-utils'

export default class FavoritesPage extends Component {

    state = {
        favorites: []
    }

    componentDidMount = async() => {
        const favorites = await getFavorites(this.props.token);
        this.setState({favorites: favorites})
    }

    render() {
        return (
            <div>
                {
                    this.state.favorites.map(favorite => {
                        <div>
                            {favorite.name} <br/>
                            Rating: {favorite.rating} <br/>
                            Price: {favorite.price} <br/>
                            <img src={favorite.image_url} alt={favorite.alias} />
                    
                        </div>
                    })
                }
            </div>
        )
    }
}
