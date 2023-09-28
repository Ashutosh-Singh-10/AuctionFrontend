import React, { Component } from "react";
import axios from "axios";
import './css/liveauction.css'
import Banner2 from './img/banner2.jpg'
// import Footer from '../footer/footer.js'
// import Startingcard from "../Intro/startingcard";

export default class Bid2 extends Component {
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
  constructor() {
    super();
    this.state = {
      email:"",
      password:"",
      roomError:0,
      highestBid: -1,
      roomId: window.location.pathname.substring(5),
      productName:"",
      productDetail:"",
      bidDiff:-1,
      myBid:0,
      minBid:-55,
      img:"",
      // url:"localhost",
      // url:"192.168.159.92",
      url:"192.168.141.92",
      
      prevBid: [
        // ["Ashutosh", 1922],
        // ["Jos Buttler", 1255],
        // ["Jofra Archer", 1622],
        // ["MS Dhoni", 9122],
        // ["Steve Smith", 9122],
        // ["Ajinkya Rahan", 9122],
        // ["Yasasvi Jaiswal", 9122],
        // ["R Ashwin", 9122],
      ],
    };
    console.log(this.state);
  }
  

  componentDidMount(){
    
    this.interval = setInterval(this.updateBid, 2000);
    const url="http://"+this.state.url+":8000/getroom"
    axios
    .post(url, {
      params: {
        roomId: this.state.roomId,
      },
    })
    .then((res) => {
      console.log("How can this possible")
      const data=res.data;

      if(res.status=="200")
      {
        this.setState({
          productName:data.productName,
          productDetail:data.productDetail,
          bidDiff:data.bidDiff,
          minBid:data.minBid,
          endTime:data.endTime,
          img:data.img,
          
        })
        console.log("Help")
      }
      else
        {
          this.setState({roomError:1})
          console.log("some error occured")
        }
    }).catch((err)=>{
      this.setState({roomError:1})
      console.log("some error occured")
    })
  }

  componentWillUnmount(){
     clearInterval(this.interval);
  }
  makebid = () => {
    
    const url="http://"+this.state.url+":8000/makebid"


    axios
      .post(url, {
        params: {
          roomId: this.state.roomId,
          bidPrice: this.state.myBid,
          email:this.getCookie("email"),
          password:this.getCookie("password"),
        },
      })
      .then((res) => {
        console.log(res.status);
        console.log(res)
      });
  };

  updateBid=()=>{
    console.log("HII")
    const url2="http://"+this.state.url+":8000/top10"
    axios
    .post(url2, {
      params: {
        roomId: this.state.roomId,
      },
    }).then((res)=>{
      if(res.status=="200")
      {
        if(res.data[0])
        this.setState({
          prevBid:res.data,
          myBid:res.data[0][1]+this.state.bidDiff,

        })
        else{
          this.setState({
            myBid:Math.max(this.state.myBid,this.state.minBid)
          })
        }
      }
    }).catch((err)=>{
      console.log("some error occured")
    })

  }

  render() {
    return (<>



<div className='AuctionRoom'>
    <div className="gap50"></div>
        <div className='bannerup'>
            <img src={Banner2} alt='...?'/>
        </div>

        <div className='Container5 '>
            <div className='left-auction-detail ' style={{minHeight:"750px"}}>
                <h1>Other Auctions</h1>
                <div className='Other-products-detail'><a href='/#'>Samsung S20 FE 5G Smartphone is Live now starting with $5000</a></div>
                <div className='breakO'></div>
                <div className='Other-products-detail'><a href='/#'>Iphone14 Smartphone will be Live from 20th May starting with $11000</a></div>
                <div className='breakO'></div>
                <div className='Other-products-detail'><a href='/#'>Antique telephone is Live now starting with $500</a></div>
                <div className='breakO'></div>
                <div className='Other-products-detail'><a href='/#'>Mona Lisa Painting is Live now with starting price of $10M</a></div>
                <div className='breakO'></div>
                <div className='Other-products-detail'><a href='/#'>See different Special Artifacts in Live Auction room from 18th may to 30th may</a></div>
            </div>


        <div className='auctiondetail'>
            <div className='IMGbox'>
             
                <img 
                        src={"http://"+this.state.url+":8000"+this.state.img}
                alt='..?'/>
                <p style={{color:"red"}}>Disclaimer* Bidding is closing soon</p>
                <div className='Biddingprocess'>
                  
                    <h1>Asking Bid</h1>
                    <h3>₹ {this.state.myBid}  </h3>
                    
                    <div className="w100 myFlex">
                    <button className=" btn btn-warning"  style={{width:"140px" ,fontWeight:"900",fontSize:"1.2rem"}} onClick={this.makebid}>Bid</button>
                    </div>
                    
                </div>
                <p><span style={{color:"red"}}>Important: </span>Clicking on 'Bid' Button is commitment to buy and is legally binding in accordance with Indian Law.</p>
            </div>
            <div className='Detailbox'>
                <div className="productdetail">
                    <h1>{this.state.productName}</h1>
                    <p>{this.state.productDetail}</p>
                    <div className='break'></div>
                </div>
                <div className='BuyerDetails'>
                    <h3>Last Bidders</h3>
                    {this.state.prevBid.map((element) => {
                      return (
                    <div className='person'>
                        <img src='https://www.citypng.com/public/uploads/preview/hd-man-user-illustration-icon-transparent-png-11640168385tqosatnrny.png?v=2023050603' alt='..?'/>
                        <p>{element[0]}</p>
                        <p>{element[1]}</p>
                    </div>
                         );
                        })}
                  
                </div>
                
            </div>
            
        </div>
</div>

<div className="gap200"></div>



        </div>
    
    
    
    
    
    </>)
    }
}
