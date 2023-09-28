import React, { Component } from 'react'

export default class FullCard extends Component {
  render() {
    return (
        <div className="w100 h100 myFlex flexWrap flexAround ">
        <div className="w90 h10 ">
          <h5>Products are very great</h5>
          </div>
        <div className="w90 h80 ">
            <img src={require("./images/JosButtler.jpg")} alt=""  className='w100 h100'/>
        </div>

    </div>

    )
  }
}
