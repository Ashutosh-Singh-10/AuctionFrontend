import React, { Component } from 'react'
import "./css/footer.css"

export default class Foot extends Component {
  render() {
    return (<>

<footer className="footer-distributed" style={{backgroundColor:"#020a13"}}  id="footid">

			<div className="footer-left">

			<p className="footer-links">
				<h2>Auction<span>10</span></h2>
			</p>
				<p className="footer-links">
					<a href="#" className="link-1">Home</a>
					
					<a href="#">Blog</a>
				
					<a href="#">Pricing</a>
				
					<a href="#">About</a>
					
					<a href="#">Faq</a>
					
					<a href="#">Contact</a>
				</p>

				<p className="footer-company-name">Company Name © 2015</p>
			</div>

			<div className="footer-center">

				<div>
					<i className="fa fa-map-marker"></i>
					<p><span>B1 block Chandigarh University</span> Mohali, Punjab</p>
				</div>

				<div>
					<i className="fa fa-phone"></i>
					<p>+91 908 404 8207</p>
				</div>

				<div>
					<i className="fa fa-envelope"></i>
					<p><a href="mailto:ashutoshsinghaspr@gmail.com">ashutoshsinghaspr@gmail.com</a></p>
				</div>

			</div>

			<div className="footer-right">

				<p className="footer-company-about">
					<span>About the company</span>
					Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
				</p>

				<div className="footer-icons">

					<a href="#"><i className="fa fa-facebook"></i></a>
					<a href="#"><i className="fa fa-twitter"></i></a>
					<a href="#"><i className="fa fa-linkedin"></i></a>
					<a href="#"><i className="fa fa-github"></i></a>

				</div>

			</div>

		</footer>



 
    

    
    
    </>
    )
  }
}
