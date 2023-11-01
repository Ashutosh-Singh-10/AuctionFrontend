import React, { Component } from 'react'
import axios from 'axios';

export default class Auction extends Component {


  getCookie=(cname)=> {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
    constructor(){
        super();
        this.state={
            productName:" ",
            productDetail:"",
            bidDiff:"",
            email:this.getCookie("email"),
            password:this.getCookie("password"),
            url:"localhost",
            // url:"192.168.159.92",
            // url:"192.168.141.92"
            
        }
        console.log(this.state);
    }
    createRoom=()=>{

          const url="http://"+this.state.url+":8000/createroom"

        axios
        .post(url, {
          params: {
              productName:this.state.productName,
              productDetail:this.state.productDetail,
              bidDiff: this.state.bidDiff,
            email:this.state.email,
            password:this.state.password,
          },
        }).then((res)=>{
            console.log(res);
        })
    }
    print=()=>{
        console.log(this.state);
    }
  render() {
    return (<>

        <div className="gap100"></div>
        <div className="flex">
            product Name <input type="text" onChange={(e)=>{this.setState({productName:e.target.value})}} />  <br/>
            product Description <input type="text" onChange={(e)=>{this.setState({productDesc:e.target.value})}} />  <br/>
            Bid Difference<input type="text" onChange={(e)=>{this.setState({bidDiff:e.target.value})}} />  <br/>
        </div>
        <button className="btn btn-success"  onClick={this.print}>Print</button>
        <button className="btn btn-dark" onClick={this.createRoom}>Create Room</button>
    
    
    </> 
    )
  }
}
