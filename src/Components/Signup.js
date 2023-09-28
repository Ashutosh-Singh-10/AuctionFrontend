import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios  from 'axios';
import Cookies from 'universal-cookie';

export default class Signup extends Component {

    constructor(){
        super();
        this.state={
            email:"",
            name:"",
            password:"",
            otp:"",
            screen:0,
            // url:"localhost",
            // url:"192.168.159.92"
            url:"192.168.141.92",

        }
    }
    sendOtp=()=>{
        console.log(this.state);
        this.setState({
            screen:1
        })

        const url="http://"+this.state.url+":8000/makeotp";

        axios
        .post(url, {
          params: {
            email:this.state.email,
          },
        }).then((res)=>{
            console.log(res);
        })
    }
    createUser=()=>{

        console.log(this.state);
        const url="http://"+this.state.url+":8000/createuser"
        axios
        .post(url, {
          params: {
            email:this.state.email,
            fName:this.state.name,
            password:this.state.password,
            otp:this.state.otp,
          },
        }).then((res)=>{

            if(res.status==200)
            {

                const data=res.data;
                const cookies = new Cookies();
                cookies.set('email', this.state.email);
                cookies.set('password', this.state.password);
                window.location.pathname=""
            }          
            else{
                alert("Please enter the correct otp")
            }
      


            console.log(res);
        }).catch((res)=>{
            alert("Please enter the correct otp")
        })



    }


  render() {
    return (
        <>
   <div className="gap50"></div> 
        <div className="log-box" style={{display:this.state.screen?"none":"flex"}}>
            <div className="gap50"></div>
        <h1><b>Join Auction10</b> </h1>
         <div className='log-container'>
             <h2><b>Sign Up</b></h2>
             <div className='w100'>
                 <h4>Enter your Name:</h4>
                 <input className='w100' type='text' name='name' onChange={(e)=>{this.setState({name:e.target.value})}} ></input>
                 <h4>Enter your Email:</h4>
                 <input className='w100' type='email' name='email'  onChange={(e)=>{this.setState({email:e.target.value})}}></input>
                 <h4>Create Password:</h4>
                 <input className='w100' type='password' name='password'  onChange={(e)=>{this.setState({password:e.target.value})}} ></input>
                <hr />
        <div className="w100 myFlex">
                <button  className='btn btn-success' onClick={this.sendOtp}> <b>Next</b></button>
             </div>
             </div>
         </div>
     </div>
      <div className="log-box" style={{display:this.state.screen?"flex":"none"}}>
      <div className="gap100"></div>
      <h1><b>
        Join Auction10
        </b>
      </h1>
       <div className='log-container'>
           <h2><b>
            Enter OTP: 
            </b>
           </h2>
           <span>Check your Email for a code</span>
           <div className='w100'>
           <input className='w100' type='text' name='name' onChange={(e)=>{this.setState({otp:e.target.value})}} ></input>

          <br/>
          <hr />
          
          <div className="w100 myFlex flexBw">
            <button
            //  onClick={verifyOTP} 
                className='button otp-confirm btn btn-danger'> <b>
                    Back
                    </b>
                </button>
            <button
            //  onClick={verifyOTP} 
                className='button otp-confirm btn btn-success' onClick={this.createUser}> <b>
                    Confirm
                    </b></button>
            </div>
            </div>
           
       </div>

       <div className="gap100"></div>
   </div>


   </>
    )
  }
}
