import React, { Component } from 'react'

export default class Product extends Component {
  render() {
    return (

        <div className="w100 h100 myFlex flexWrap flexAround "  style={{padding:"10px"}}>
     
        <div className="w100 h70 ">
            <img src={require("./images/JosButtler.jpg")} alt=""  className='w100 h100'/>
        </div>
        <div className="w100 h30 ">
            <h5>Products are very great</h5>
            <h5 >Products are very great</h5>
            <h5>Products are very great</h5>
        </div>

    </div>
      
    )
  }
}
