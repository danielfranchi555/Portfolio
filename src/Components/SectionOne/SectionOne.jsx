import React from "react";
import fotoCv from "../../img/foto-cv.png";
import github from "../../img/github.png";
import linkedin from "../../img/linkedin.png";
import twitter from "../../img/twitter.png";
import Fade from 'react-reveal/Fade';


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
    <Fade>
      <div className="row ">
     <div className="col">
      <div className="animate__animated" style={{margin:'0 auto',width:''}}>
               <img src={fotoCv} alt="" className="img-cv" style={{width:'250px',height:'auto'}} />
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
            <button className="btn  btn-dark" style={{ fontSize: "18px",color:'white' }}>
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
    </Fade>
    
  </div>
);

export default SectionOne;
