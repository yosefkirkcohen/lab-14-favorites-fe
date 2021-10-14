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
<<<<<<< HEAD
                {
                    this.state.favorites.map((favorite) => {
=======
                {/* {
                    this.state.favorites.map(favorite => {
>>>>>>> d737db384451c8f8dcfbca906925cc42c2244ef9
                        <div>
                            {favorite.name} <br/>
                            Rating: {favorite.rating} <br/>
                            Price: {favorite.price} <br/>
                            <img src={favorite.image_url} alt={favorite.alias} />
                    
                        </div>
                    })
                } */}
            </div>
        )
    }
}
