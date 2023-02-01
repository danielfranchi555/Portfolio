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
     <div className="col">
      <img src={fotoCv} alt="" style={{width:'150px',borderRadius:'2rem'}} />
     </div>
      <div className="col-md py-2 d-flex" style={{alignItems:'center',justifyContent:'center'}}>
      <div className="col-md text-center" style={{ color: "white" }}>
        <h1 className="" style={{ color: "#008B8B" }}>
          Bienvenido a mi portfolio
        </h1>
        <div class="text-effect1 effect">
    <p>
      <span class="text-wrapper">
        <span>Front End/React Developer</span>
      </span>
    </p>
  </div>
        <div className=" d-flex container " style={{justifyContent:'center'}}>
          <div className="text-center">
            <button className="btn btn-primary" style={{ fontSize: "18px" }}>
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
