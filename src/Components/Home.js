import React, { Component } from 'react'
import QuadCard from './QuadCard'
import FullCard from './FullCard'
import { Link } from 'react-router-dom'

export default class Home extends Component {
  render() {
    return (
      <div className="w100 bg1 myFlex flexVert">
        
        <div className="myFlex flexVert" style={{width:'1380px'}}>

          {/* <div className="myFlex w100 bg4 flexEven" style={{height:"442px"}}>
            <div className="h100 bg3" style={{width:"850px"}}></div>
            <div className="h100 bg3 " style={{width:"422px"}}></div>
          </div> */}
          
          <div className="gap100"></div>
           <Link to={"productpage"} className="w100">
          <div className="grid3 w100  bg1" style={{height:"400px" ,paddingInline:"36px"}}>
            <div className='h100 myFlex overHide'> 
            <img src={require("./images/songs/song1.jpg")} alt=""  className='imgFull'/>
              </div> 
            <div className='h100 myFlex overHide'> 
            <img src={require("./images/songs/song2.jpg")} alt=""  className='imgFull'/>
              </div> 
            <div className='h100 myFlex overHide'> 
            <img src={require("./images/songs/song5.webp")} alt=""  className='imgFull'/>
              </div> 


          </div>
              </Link> 




          <div className="gap50"></div>


          <div className='myFlex flexEven w100'>
            <div className='bg3' style={{height:"442px" ,width:"300px"}}> <QuadCard/></div>
            <div className='bg3' style={{height:"442px" ,width:"300px"}}> <QuadCard/></div>
            <div className='bg3' style={{height:"442px" ,width:"300px"}}> <FullCard/></div>
            <div className='bg3' style={{height:"442px" ,width:"300px"}}> <QuadCard/></div>
          </div>
          <div className="gap50"></div>
          <div className='myFlex flexEven w100'>
            <div className='bg3' style={{height:"442px" ,width:"300px"}}> <QuadCard/></div>
            <div className='bg3' style={{height:"442px" ,width:"300px"}}> <QuadCard/></div>
            <div className='bg3' style={{height:"442px" ,width:"300px"}}> <FullCard/></div>
            <div className='bg3' style={{height:"442px" ,width:"300px"}}> <QuadCard/></div>

          </div>

          <div className="gap100"></div>


          <div className="myFlex flexVert w100  flexBw " style={{height:"250px",paddingInline:"36px"}}>
          <div className="w100 h15 myFlex flexBw  bg2"  >
            <b style={{marginInline:"25px" ,marginTop:"15px"}}>Famous Album</b>
          </div>
            <div className="w100 h85 myFlex flexEven bg2 ">
              <div className="h90 w12" style={{padding:"3px"}}>
                <img src={require("./images/songs/song1.jpg")}  alt="" className="imgFull" />
              </div>
              <div className="h90 w12" style={{padding:"3px"}}>
                <img src={require("./images/songs/song4.png")}  alt="" className="imgFull" />
              </div>
              <div className="h90 w12" style={{padding:"3px"}}>
                <img src={require("./images/songs/song3.jpg")}  alt="" className="imgFull" />
              </div>
              <div className="h90 w12" style={{padding:"3px"}}>
                <img src={require("./images/songs/song2.jpg")}  alt="" className="imgFull" />
              </div>
              <div className="h90 w12" style={{padding:"3px"}}>
                <img src={require("./images/gems/gem2.jpg")}  alt="" className="imgFull" />
              </div>
              <div className="h90 w12" style={{padding:"3px"}}>
                <img src={require("./images/gems/gem3.jpg")}  alt="" className="imgFull" />
              </div>
              <div className="h90 w12" style={{padding:"3px"}}>
                <img src={require("./images/gems/gem4.jpg")}  alt="" className="imgFull" />
              </div>
         
         
         
            </div>
          </div>
          <div className="gap100"></div>


        </div>
      
      

      </div>

      
    )
  }
}
