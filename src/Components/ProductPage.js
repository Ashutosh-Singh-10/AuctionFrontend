import React, { Component } from 'react'
import FullCard from './FullCard'
import Product from './Product'
import axios from 'axios'
import { Link } from 'react-router-dom'

import InfiniteScroll from "react-infinite-scroll-component";


export default class ProductPage extends Component {
  constructor()
  {
    super()
    this.state={
      items:[],
      page:1,
      url:"localhost",
      // url:"192.168.159.92",
      // url:"192.168.141.92",
    }
   
}

fetchData=()=>{
  let url="http://"+this.state.url+":8000/products"
  // let url="http://192.168.141.92:8000/products"
  axios
  .post(url, {
    params: {
      page:this.state.page
    },
  })
  .then((res) => {
    this.setState({
      items:this.state.items.concat(res.data)
    })
    console.log(res.data);
  })
  
}


    fetchMoreData=()=>
    {
      const pg=this.state.page;
      console.log("haanji")

      this.setState({
        page:this.state.page+1,
      })
      this.fetchData();

    }
    componentDidMount()
    {
      this.fetchData()
    }
  
  render() {
    return (
      <div>
        <div className="w100 bg1 myFlex flexVert">
        <div className="gap100"></div>
            <InfiniteScroll
          dataLength={this.state.items.length}
          next={this.fetchMoreData}
          hasMore={true}
          loader={<h4></h4>}
        >
   
          <div className="myFlex flexEven flexWrap" style={{width:'1380px'}}>
          {this.state.items.map((item,i) => (
             <div className='bg3' style={{height:"442px" ,width:"300px" ,marginBlock:"10px"}} key={i}> 
              <div className="w100 h100 myFlex flexWrap flexAround "  style={{padding:"10px",}}>
     
                    <div className="w100 h70 ">
                      <Link to={`/bid/${item.productId}`} >
                        <img src={"http://"+this.state.url+":8000"+item.img} alt=""  className='w100 ' style={{
                          aspectRatio:"1/1", height:"auto",objectFit:"contain",background:"black"
                        }}/>
                        </Link>
                    </div>
                    <div className="w100 h30 ">
                        <h5><b>{item.productName}</b></h5>
                        <h5 >{  
                        item.productDetail.substr(0,40)
                        }</h5>

                        <h5 className='w100 myFlex'>
                        <Link to={`/bid/${item.productId}`} ><button className="btn btn-danger" style={{width:"90px"}}><b>Bid</b></button></Link>
                        </h5>
                    </div>

                </div>
             </div>
          ))}
          </div>
        </InfiniteScroll>

           
          


        <div className="gap100"></div>
        </div>
       
    </div>
    )
  }
}
