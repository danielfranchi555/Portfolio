import React from "react";
import fotoCv from "../../img/FOTO-CV-3.jpeg";
import github from "../../img/github.png";
import linkedin from "../../img/linkedin.png";
import twitter from "../../img/twitter.png";
import background from '../../img/FOTO-CV-3.jpeg'
import './SectionOne.scss'
const SectionOne = () => (
  <div
    className="container text-center py-5 "
    style={{
      marginTop: "100px",
      marginBottom: "200px",
      height: "auto",
      width: "auto",
    }}
  >
    <div className="row">
      <div className="col-md text-center" style={{ color: "white" }}>
        <h1 className="" style={{ color: "#008B8B" }}>
          Bienvenido a mi portfolio
        </h1>
        <div class="text-effect1 effect">
    <p>
      <span class="text-wrapper">
        <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi perferendis distinctio maxime doloribus at quaerat animi totam natus, laboriosam autem nam nulla molestias rerum explicabo placeat voluptas aut ad ab!</span>
      </span>
    </p>
  </div>
        <div className=" d-flex container " style={{justifyContent:'center'}}>
          <div className="text-center">
            <button className="btn btn-primary" style={{ fontSize: "12px" }}>
              Contactame
            </button>
          </div>
          <div className="d-flex ">
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
      <div className="col-md py-2 d-flex" style={{alignItems:'center',justifyContent:'center'}}>
         <div style={{backgroundImage: `url(${background})`,backgroundSize:'cover',backgroundPosition:'center',width:'200px',height:'300px'}}>

         </div>
      </div>
    </div>
  </div>
);

export default SectionOne;
