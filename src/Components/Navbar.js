import React, { Component } from 'react'
import {Link} from "react-router-dom"


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
      email:this.getCookie("email"),
      password:this.getCookie("password")
    })  
    alert('Complete Cache Cleared')
  
}


  render() {


    return (
      <nav className="navbar fixed-top navbar-expand-lg
      c3 bg5 " data-bs-theme="dark" >
      <div className="container-fluid ">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>


        <div className="collapse navbar-collapse justify-content-evenly " id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to={"/"} className="nav-link active" aria-current="page" href="#">
                Home
              </Link>
            </li>
  
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="#footid">
                Contact us
              </Link>
            </li>
  
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#" style={{height:"400px"}}>
                <button onClick={this.logout}

                style={{margin:"5px"}}
                >Logout</button>
              </a>
            </li>
  
  
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              // style={{width:"700px"}}
            />
            <button className="btn btn-outline-success " type="submit">
              Search
            </button>
          </form>
          <div style={{display:this.state.email?"none":"block"}}>  
          <Link to={"login"}>
            <button className="btn btn-warning" style={{marginInline:"5px"}}> Login</button>
            </Link>
            <button className="btn btn-warning">SignUp</button> 
          </div>
          <div style={{display:this.state.email?"block":"none", marginLeft:"10px"}}>  

            <img src={require("./images/JosButtler.jpg")} alt=""  style={{width:"40px",height:"40px",borderRadius:"100%"}}/>           
          </div>

        </div>
        
    


      </div>
    </nav>



    )
  }
}
