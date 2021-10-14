import React, { Component } from 'react'
import { postFavorite,  checkFavorite } from '../fetch-utils'

export default class Business extends Component {

  handleClick = async() => {
    const { id } = this.props.business;
    console.log(id);
    const { token } = this.props;
    await postFavorite(id, token);
    this.props.refreshBusinesses();
  }
  
  render() {
    const {
      name,
      image_url,
      rating,
      id,
      favorited
    } = this.props.business
    return (
      <div key={id} className="business-div">
        { favorited
          ? <div>Favorited⭐</div>
          : <button onClick={this.handleClick}>Favorite</button> }
        Name: {name} <br />
        <img alt="The business" src={image_url} />
        Rating: {rating}
      </div>
    )
  }
}
