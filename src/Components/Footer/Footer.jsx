import React from 'react'
import github from "../../img/github.png";
import linkedin from "../../img/linkedin.png";
import twitter from "../../img/twitter.png";
const Footer = () => {
  return (
    <div className=' py-5 mt-5 ' style={{width:'100%',backgroundColor:'#233142'}}>
        <div className='d-flex' style={{justifyContent:'center',borderTop:'solid 1px gray',borderBottom:'solid 1px gray'}}>
            <div className='px-3 py-4'><img src={github} alt="" style={{width:'20px'}} /></div>
            <div className='px-3 py-4'><img src={linkedin} alt="" style={{width:'20px'}} /></div>
            <div className='px-3 py-4'><img src={twitter} alt="" style={{width:'20px'}} /></div>
            <div className='px-3 py-4'><img src={twitter} alt="" style={{width:'20px'}} /></div>
        </div>
    </div>
  )
}

export default Footer