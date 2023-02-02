import React from "react";
import html from "../../img/html-5.png";
import css from "../../img/css.png";
import js from "../../img/js.png";
import react from "../../img/react.png";
import boostrap from "../../img/bootstrap.png";
import sass from "../../img/sass.png";
import Fade from "react-reveal/Fade";
import git from "../../img/git.png";
import github from "../../img/github-2.png";
import npm from "../../img/npm.png";

const SectionTwo = () => {
  return (
    <div className="container" id="sectionTwo">
      <div className="text-center" style={{}}>
        <h1 style={{ color: "white" }}>Skills</h1>
      </div>
      <div className="container" style={{ margin: "0 auto", width: "auto" }}>
        <p style={{ color: "white", fontSize: "13px" }} className="text-center">
          Desarrolo Frontend
        </p>
      </div>
      <Fade left>
        <div
          className="d-flex mb-4 "
          style={{ justifyContent: "space-evenly" }}
        >
          <div>
            <img src={html} alt="" style={{ width: "50px" }} />
          </div>
          <div>
            <img src={css} alt="" style={{ width: "50px" }} />
          </div>
          <div>
            <img src={js} alt="" style={{ width: "50px" }} />
          </div>
        </div>
      </Fade>
      <Fade left>
        <div className="d-flex" style={{ justifyContent: "space-evenly" }}>
          <div>
            <img src={react} alt="" style={{ width: "50px" }} />
          </div>
          <div>
            <img src={boostrap} alt="" style={{ width: "50px" }} />
          </div>
          <div>
            <img src={sass} alt="" style={{ width: "50px" }} />
          </div>
        </div>
      </Fade>
      <Fade left>

      <div className="d-flex py-4" style={{ justifyContent: "space-evenly" }}>
        <div>
          <img src={git} alt="" style={{ width: "50px" }} />
        </div>
        <div>
          <img src={github} alt="" style={{ width: "50px" }} />
        </div>
        <div>
          <img src={npm} alt="" style={{ width: "50px" }} />
        </div>
      </div>
      </Fade>
    </div>
  );
};

export default SectionTwo;
