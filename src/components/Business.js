import React, { Component } from 'react'

export default class Business extends Component {
  render() {
    const {
      name,
      image_url,
      rating
    } = this.props.business
    return (
      <div className="bussiness-div">
        Name: {name} <br />
        <img alt="The business" src={image_url} />
        Rating: {rating}
      </div>
    )
  }
}
