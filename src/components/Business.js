import React, { Component } from 'react'
import { postFavorite } from '../fetch-utils'
export default class Business extends Component {
  state = {
    favorites: []
  }
  handleClick = async() => {
    const { id } = this.props.business;
    const { token } = this.props;
    const favorites = await postFavorite({id, token})
    this.setState({favorites: favorites})
  }
  render() {
    const {
      name,
      image_url,
      rating,
      
    } = this.props.business
    return (
      <div className="business-div">
        <button onClick={this.handleClick}>Favorite</button>
        Name: {name} <br />
        <img alt="The business" src={image_url} />
        Rating: {rating}
      </div>
    )
  }
}
