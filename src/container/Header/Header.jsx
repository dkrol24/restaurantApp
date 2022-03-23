import React from "react";
import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Header.css";

const Header = () => (
  <div className="app__bg app__header" id="home">
    <div classname="app__wrapper_info ">
      <SubHeading title="Chase the new flavour" />

      <h1 className="app__header-h1">The Key to Fine Dining</h1>
      <p className="p__opensans" style={{ margin: "2rem 0" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, odit
        quis, nam repudiandae explicabo perspiciatis assumenda dolorem
        cupiditate quos corporis at atque iste iure ducimus sint fugit.
      </p>
      <button type="button" className="custom__button">
        Explore Menu
      </button>
    </div>
    <div className="app__wrapperpaper">
      <img src={images.welcome} alt="headerimg" />
    </div>
  </div>
);

export default Header;
