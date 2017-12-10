import React from "react";
import firstIMG from "../images/email.jpg";
import secondIMG from "../images/timg.jpg";
import { Parallax } from "react-materialize";

const Landing = () => {
  return (
    <div>
      <Parallax imageSrc={secondIMG} />
      <div className="section blue darken-3">
        <div className="row container white-text">
          <h2 className="header">Emaily!</h2>
          <p className="text-darken-3 lighten-3 flow-text">
            Collect feedback from your users
          </p>
        </div>
      </div>
      <Parallax imageSrc={firstIMG} />
    </div>
  );
};

export default Landing;
