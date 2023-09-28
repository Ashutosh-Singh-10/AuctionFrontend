import React, { Component } from 'react'
import {Link} from "react-router-dom"
import "./css/login.css"
import axios from "axios";
import Cookies from 'universal-cookie';

export default class Login extends Component {
    constructor()
    {
        super();
        this.state={
            email:"ashu@gmail.com",
            password:"ashu@1010",
            url:"localhost",
            // url:"192.168.159.92",
            // url:"192.168.141.92",
          }
        }
        authenticate=()=>{
          let url="http://"+this.state.url+":8000/authenticate"
          // let url="http://localhost:8000/authenticate"
          axios
          .post(url, {
            params: {
              // email:this.state.email,
              // password:this.state.password,
              email:"ashu@gmail.com",
              password:"ashu@1010",
          },
        })
        .then((res) => {
          const data=res.data;
          const cookies = new Cookies();
          cookies.set('email', this.state.email);
          cookies.set('password', this.state.password);

          console.log(window.location.pathname);
          window.location.pathname=""
        }).catch((err)=>{
          alert("Please enter correct emal password")
        })
        
    }
    
  render() {
    return (
        <div className="log-box">
                    <div className="gap100"></div>

        <h1> 
         <b> Welcome to Auction10</b>
          </h1>
         <div className='log-container'>
             <h2>
              <b>Sign In</b>
              </h2>
                 <h4>Email:</h4>
                 {/* type='text' value={email} onChange={e=>setEmail(e.target.value)}*/}
                 <input className='w100'  onChange={(e)=>{this.setState({email:e.target.value})}}></input>

                 <h4>Password:</h4>
                 {/* value={password} onChange={e=>setPassword(e.target.value)}*/}
                 <input type='password'className='w100' onChange={(e)=>{this.setState({password:e.target.value})}}></input>

                 <br/>
                 <button  className='button sign-in-button btn btn-warning' onClick={this.authenticate}>Sign In</button>
             <p>By signing-in you agree to Auction10's Condition of use & Sale.</p>
             {/* <p>_OR_</p> */}
             {/* <Link to="/signup"><button className='button create-acc-button'>Create your Auction10 account</button></Link> */}
         </div>
     </div>
    )
  }
}
