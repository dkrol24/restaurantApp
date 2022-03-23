import React from "react";
import { SubHeading } from "../../components";
import "./Chef.css";
import { images } from "../../constants";

const Chef = () => (
  <div className="app__container" id="chef">
    <div className="app__wrapper-image">
      <img src={images.chef} alt="chef image" />
    </div>

    <div className="app__wrapper-info">
      <SubHeading title="Chef's Word" />
      <h1 className="headtext__cormorant">What We Believe In</h1>
      <div className="app__quotte-chef">
        <p className="p__opensans" style={{ margin: "2rem 0" }}>
          <img src={images.quote} alt="quote" />
          lorem ipsum dolor sit amet, consectetur adipiscinglorem ipsum dolor
          sit amet, consectetur adipiscinglorem ipsum dolor sit amet,
          consectetur adipiscinglorem ipsum dolor
        </p>
      </div>

      <div className="sign">
        <h1>Kevin Luo</h1>
        <p>Chef & Founder</p>
      </div>
      <div className="app__chef-sign">
        <img src={images.sign} alt="chef sign" />
      </div>
    </div>
  </div>
);

export default Chef;
