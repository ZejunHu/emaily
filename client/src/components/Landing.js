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
            Because it is just a test mode stripe, so you can use credit card
            number 4242 4242 4242 4242 to add credits under user&apos;s dropdown
            menu.
          </p>
          <p>
            We use free server, database and email helper, so the statistical
            data of every survey may response after very long time you clicking
            the link in received email.
          </p>
        </div>
      </div>
      <Parallax imageSrc={firstIMG} />
    </div>
  );
};

export default Landing;
