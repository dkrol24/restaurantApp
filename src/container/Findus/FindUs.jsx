import React from "react";
import styled from "styled-components";
import { images } from "../../constants";
import "./FindUs.css";
import { SubHeading } from "../../components";
const FindUs = () => (
  <div className="container app__bg" id="contact">
    <div className="container__content">
      <div className="container__content_findus">
        <SubHeading title="Contact" />
        <h1 className="app__header-h1">Find Us</h1>
        <p className="container__content_adress">
          Lane Ends Bungalow, Whatcroft Hall Lane, Rohart, CW9 75G
        </p>
        <p className="container__content_hours" style={{ margin: "2rem 0" }}>
          Opening Hours
        </p>
        <p className="container__content_adress-hours">
          Mon - Fri: 10:00 am - 02:00 am
        </p>
        <p className="container__content_adress-hours">
          Sat - Sun: 10:00 am - 03:00 am
        </p>

        <button type="button" className="normal_btn">
          Visit Us
        </button>
      </div>
      <div className="container__content-image">
        <img src={images.findus} alt="findusimage" />
      </div>
    </div>
  </div>
);

export default FindUs;
