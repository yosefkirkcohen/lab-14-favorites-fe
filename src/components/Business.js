import React, { Component } from 'react'
import { postFavorite } from '../fetch-utils'
export default class Business extends Component {
  
  handleClick = async() => {
    const { id } = this.props.business;
    const { token } = this.props;
    await postFavorite(id, token)
    
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
        <button onClick={this.handleClick}>Favorite</button>
        Name: {name} <br />
        <img alt="The business" src={image_url} />
        Rating: {rating}
      </div>
    )
  }
}
