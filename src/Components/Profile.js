import React, { Component } from 'react'
import axios from "axios";

export default class Profile extends Component {
    constructor(){
        super();
        this.state={
            userId:window.location.pathname.substring(9),
            fName:"",
            lName:"",
            address:"",
            totalAuction:"",
            totalBids:"",
            img:"",
            // url:"localhost",
            // url:"192.168.141.92",
            url:"192.168.141.92",
        }

    }

    componentDidMount(){
      const url="http://"+this.state.url+":8000/userinfo"
        axios
        .post(url, {
          params: {
            userId: this.state.userId,
          },
        })
        .then((res) => {
          const data=res.data;
    
          if(res.status=="200")
          {
            this.setState({
                fName:data.fName,
                lName:data.lName,
                address:data.address,
                totalAuction:data.totalAuction,
                totalBids:data.totalBids,
                img:data.img,

              
              
            })
            console.log(this.state)
          }

        })
    }


  render() {
    return (<>
    hii
    <div className="gap200"></div>
    <img 
                        src={"http://"+this.state.url+":8000/"+this.state.img}
                alt='..?'/>
    {this.state.fName}
    {this.state.lName}
    {this.state.address}
    {this.state.totalAuction}
    {this.state.totalBids}
    
    {/* {this.state} */}



    </>
     
    )
  }
}
