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
          <h4 className="text-darken-3 lighten-3 flow-text">
            Collect feedback from your users
          </h4>
          <p>
            Alpha Version: Use credit card 4242 4242 4242 4242 with random email
            and other information to add credits
          </p>
          <p>
            We use free server, database and email helper, so the results of
            "yes" and "no" of every survey may change very slowly after you
            clicking the link in every email.
          </p>
        </div>
      </div>
      <Parallax imageSrc={firstIMG} />
    </div>
  );
};

export default Landing;
