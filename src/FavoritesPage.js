import React, { Component } from 'react'
import { getFavorites } from './fetch-utils'

export default class FavoritesPage extends Component {

    state = {
        favorites: []
    }

    componentDidMount = () => {
        const favorites = getFavorites();
        this.setState({favorites: favorites})
    }

    render() {
        return (
            <div>
                {
                    this.state.favorites.map(favorite => {
                        <div>

                        </div>
                    })
                }
            </div>
        )
    }
}
