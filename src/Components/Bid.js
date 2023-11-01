import React, { Component } from "react";
import axios from "axios";


export default class Bid extends Component {
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
      email:this.getCookie("email"),
      password:this.getCookie("password"),
      roomError:0,
      highestBid: -1,
      roomId: window.location.pathname.substring(5),
      productName:"",
      productDetail:"",
      bidDiff:-1,
      myBid:0,
      minBid:-55,
      
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
    const url="http://localhost:8000/getroom";
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
          endTime:data.endTime
          
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
    let url = "http://localhost:8000/makebid";

    axios
      .post(url, {
        params: {
          roomId: this.state.roomId,
          bidPrice: this.state.myBid,
          email:this.state.email,
          password:this.state.password,
        },
      })
      .then((res) => {
        console.log(res.status);
        console.log(res)
        console.log("Ho gyi bid")
      });
  };

  updateBid=()=>{
    console.log("HII")
    const url2="http://localhost:8000/top10";
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
  getHighBid = () => {
    let url = "XYZ";
    axios
      .post(url, {
        params: {
          roomId: this.roomId,
        },
      })
      .then((res) => {
        console.log(res);
      });
  };

  render() {
    return (
      <>
        <div>
          <br />
          <br />
          <br />
        </div>
        <div className="myFlex flexVert " style={{display:this.state.roomError?"none":"flex"}}>
          <div className="productBox w100 myFlex flexAround  flexStart  ">
            <div className="imageBox myFlex " >
              <img
                src={require("./images/JosButtler.jpg")}
                alt=""
                style={{ width: "500px", height: "500px" }}
              />
            </div>
            <div className="bidBox ">
              <div>
                <h1>{this.state.productName}</h1>
                <hr />
              </div>

              <div className="myFlex flexStart  ">
                <div className="w50 myFlex flexVert">
                  <div className="myFlex flexVert w100 borderBlack borderRad10">
                    <div className="">
                      <h3>Top Bids</h3>
                    </div>
                    {this.state.prevBid.map((element) => {
                      return (
                        <div className=" w80 ">
                          <div
                            style={{ height: "2px", background: "black" }}
                          ></div>
                          <div className="myFlex flexBw">
                            <div className="myFont2 w50">
                              <i class='far fa-user-circle'></i> {element[0]}
                            </div>
                            <div className="myFlex  myFont2 w50">
                              {element[1]}
                            </div>
                          </div>
                        </div>
                      );
                    })}

                  </div>
                    <div className="w100 myFlex ">
                      <div className="w50 myFont4 text-center"> ₹ {this.state.myBid}   </div>
                      <button className="btn  bg1 w50"onClick={this.makebid}>
                        Bid     
                      </button>
                    </div>
                </div>
                <div className="myFlex flexVert  w50 ">
                <div className="myFlex flexVert  w100 ">
                <div className="myFlex flexVert  w100 borderBlack borderRad10">
                  
                  <div className="myFont3 w50">
                    Auction Details
                    </div>
                    <div className="myFlex w90" >
                      <div className="w50 myFont2 ">Auction Type</div>
                      <div className="w50   ">English</div>
                    </div>
                    <div className="myFlex w90">
                      <div className="w50 myFont2 ">Multiple Bids Allowed</div>
                      <div className="w50   ">No</div>
                    </div>
                    <div className="myFlex w90">
                      <div className="w50 myFont2 ">Equal Bids Allowed</div>
                      <div className="w50  ">Noo</div>
                    </div>
                    </div>
                      
                      <br></br>
                    <div className="myFlex flexVert  w90 borderBlack borderRad10 c1 ">
                      <b>Ends on :  {this.state.endTime}</b>
                      </div>

                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="myFlex" style={{display:this.state.roomError?"none":"flex"}}>
          <div className="myFlex w90">
            {this.state.productDetail}<br></br>

          </div>
        </div>
        <div className="myFlex" style={{display:this.state.roomError?"flex":"none"}}>
          <h1>This room doesn't exist</h1>
        </div>
      </>
    );
  }
}
