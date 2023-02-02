import React from "react";
import fotoCv from "../../img/FOTO-CV-3.jpeg";
import github from "../../img/github.png";
import linkedin from "../../img/linkedin.png";
import twitter from "../../img/twitter.png";
import background from '../../img/FOTO-CV-3.jpeg'

import './SectionOne.scss'
const SectionOne = () => (
  <div
    className="container text-center  "
    style={{
      marginTop: "100px",
      height: "auto",
      width: "auto",
    }}
  >
    <div className="row ">
     <div className="col ">
      <div className="animate__animated " >
              <img src={fotoCv} alt="" className="animate__backInLeft" style={{width:'150px',height:'auto',borderRadius:'2rem'}} />
      </div>
     </div>
      <div className="col-md py-2 d-flex" style={{alignItems:'center',justifyContent:'center'}}>
      <div className="col-md text-center" style={{ color: "white" }}>
        <h1 className="" style={{ color: "#f2f2f2" }}>
          Bienvenido a mi portfolio
        </h1>
        <div class="text-effect1 effect">
    <p>
      <div class=" animate__animated animate__fadeInRightBig ">
        <h5 className="lineUp" style={{fontSize:'13px',color:'#f96d00'}}>Front End/React Developer</h5>
      </div>
    </p>
  </div>
        <div className=" d-flex container " style={{justifyContent:'center'}}>
          <div className="text-center ">
            <button className="btn " style={{ fontSize: "18px",backgroundColor:'#222831',color:'white' }}>
              Contactame
            </button>
          </div>
          <div className="d-flex" style={{alignItems:'center'}}>
            <div>
              {" "}
              <img
                src={github}
                alt=""
                style={{ width: "20px", margin: "5px" }}
              />{" "}
            </div>
            <div>
              {" "}
              <img
                src={linkedin}
                alt=""
                style={{ width: "20px", margin: "5px" }}
              />{" "}
            </div>
            <div>
              {" "}
              <img
                src={twitter}
                alt=""
                style={{ width: "20px", margin: "5px" }}
              />{" "}
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  </div>
);

export default SectionOne;
