// import React from "react";
import "./css/navbar.css";
import {Link } from "react-router-dom";
import React, { Component } from 'react'
import icon from "./img/Search.png"
import user from "./img/User.png"
import cart from "./img/cart.png"

export default class Navbar extends Component {

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
  constructor()
  {
    super();
    this.state={
      email:this.getCookie("email"),
      password:this.getCookie("password")
    }
  
  }
  
  logout=()=>{
   
      // caches.keys().then((names) => {
      //   names.forEach((name) => {
      //     caches.delete(name);
      //   });
      // });
      window.location.pathname=""
      document.cookie = "email=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      document.cookie = "password=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  
      this.setState({
        email:"",
        password:"",
      })  
      alert('You are logged out Successfully')
    
  }


  render() {
    return (<>

    <div className="n-wrapper" id="Navbar bg5">
       {/* left */}
       <div className="n-left">
         <Link to=""><div className="n-name"><button>Auction<span style={{color:"#FCA61F"}}>10</span></button></div></Link>
         <div className="n-list ">
           <ul  className="" style={{ listStyleType: "none",margin:"0px",padding:"0px",height:"100%" }}>
             <li className="dropdown">
              <a href="/#">Explore</a>
             <div className="dropdown-content">
                 <a href="/#">Artifacts</a>
                 <a href="/#">Electronics</a>
                 <a href="/#">Art</a>
                 <a href="/#">Jewellery</a>
                 <a href="/#">furniture</a>
                 <a href="/#">Fashion</a>
                 <a href="/#">Automobiles</a>
               </div></li>
             <li className="dropdown">
                <a href="/#">Contact Us</a>
            </li>
            <li className="dropdown">
                <a href="/#">About Us</a>
            </li>
           </ul>
         </div>
       </div>
       

       <div className="n-right">
       <div className="search-box">
          <form action="/#" method="get">
              <input type="text" placeholder="Search for products..."/>
              <button type="submit"><img src={icon} alt="." /></button>
          </form>
        </div>
        <Link >
         <div className="nav-button"> 
         <Link to="/login">
        <button className="button n-button2 btn btn-warning"   style={{display:this.state.email===""?"initial":"none" ,textDecoration:"none"}}  >
        <b>    LogIn</b>
        </button>
        </Link>
        <Link to="/Signup">
         <button className="button n-button2 btn btn-warning"   style={{display:this.state.email===""?"initial":"none" ,textDecoration:"none"}}>
         <b>SignUp</b>

            </button>
            </Link>
  <button className=" n-button3">
         <ul  className="" style={{ listStyleType: "none",margin:"0px",padding:"0px",height:"100%" , display:this.state.email===""?"none":"initial" }}>
             <li className="dropdown">
                  <a href="/#">         <button className=" n-button4          "  style={{display:this.state.email===""?"none":"initial"}} ><img src={user} alt="" /></button>
                </a>    
                 <div className="dropdown-content">
                    <button className="btn btn-danger"onClick={this.logout}>Logout</button>
      
                        </div></li>
               </ul>
            </button>
                  <button className=" n-button3           "  style={{display:this.state.email===""?"none":"initial"}} ><img src={cart} alt="" /></button>

         {/* <button className=" n-button4          "  style={{display:this.state.email?"none":"initial"}} ><img src={user} alt="" /></button> */}
         </div>
         </Link>
        </div>
     </div>
     </>
        
    )
  }
}
