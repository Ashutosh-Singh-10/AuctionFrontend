import React, { Component } from 'react'

export default class QuadCard extends Component {
  render() {
    return (
        <div className="myFlex w100 h100 flexVert ">
        

        <div className="w85 h15 myFlex  flexEnd">
            <div className=''>Welcome to Electronics and its component </div>
        </div>
        <div className="w100 h85 myFlex flexWrap flexEven" >

         
            <div className="w40 h40 ">
                <div className='w100 h85 myFlex overHide'>
                    <img src={require("./images/painting/painting1.jpg")} alt=""  className=' imgClass'/>
                </div>
                <div   className='w100 h15'>price drop alert</div>
            </div>
            <div className="w40 h40 ">
                <div className='w100 h85 myFlex overHide'>
                    <img src={require("./images/painting/painting2.jpg")} alt=""  className=' imgClass'/>
                </div>
                <div   className='w100 h15'>price drop alert</div>
            </div>
            <div className="w40 h40 ">
                <div className='w100 h85 myFlex overHide'>
                    <img src={require("./images/painting/painting3.jpg")} alt=""  className=' imgClass'/>
                </div>
                <div   className='w100 h15'>price drop alert</div>
            </div>
            <div className="w40 h40 ">
                <div className='w100 h85 myFlex overHide'>
                    <img src={require("./images/painting/painting4.webp")} alt=""  className=' imgClass'/>
                </div>
                <div   className='w100 h15'>price drop alert</div>
            </div>
         
   
            
            
            
        </div>

        </div>
    )
  }
}
