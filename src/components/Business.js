import React, { Component } from 'react'
import { postFavorite,  checkFavorite } from '../fetch-utils'

export default class Business extends Component {
  state = {
    favorites: []
  }
  handleClick = async() => {
    const { id } = this.props.business;
    const { token } = this.props;
    const favoriteID = await postFavorite(id, token)
    this.setState( {favorites: favoriteID})
  }
  
  render() {
    const {
      name,
      image_url,
      rating,
      id
      
    } = this.props.business
    return (
      <div key={id} className="business-div">
        {console.log(this.props.businesses)}
        { checkFavorite(this.props.businesses, this.props.token)
          ? <div>Favorited⭐</div>
          : <button onClick={this.handleClick}>Favorite</button> }
        Name: {name} <br />
        <img alt="The business" src={image_url} />
        Rating: {rating}
      </div>
    )
  }
}
