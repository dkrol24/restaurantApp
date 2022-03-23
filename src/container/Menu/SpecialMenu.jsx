import React from "react";
import "./SpecialMenu.css";
import { SubHeading, MenuItem } from "../../components";
import { images, data } from "../../constants";
const SpecialMenu = () => (
  <div
    className="app__specialMenu 
flex__center "
    id="menu"
  >
    <div className="app__specialMenu-title">
      <SubHeading title="Menu That Fits You Palette" />
      <h1 className="headtext__cormorant">Today's Special</h1>
    </div>

    <div className="app__specialMenu-menu ">
      <div className="app__specialMenu-menu_wine flex__center ">
        <p className="app__specialMenu_menu_heading">Wine & Beer</p>
        <div className="app__specialMenu_menu_items">
          {data.wines.map((wine, index) => (
            <MenuItem
              title={wine.title + index}
              price={wine.price}
              tags={wine.tags}
            />
          ))}
        </div>
      </div>

      <div className="app__specialMenu_menu_img flex__center">
        <img src={images.menu} alt="menu img" />
      </div>

      <div className="app__specialMenu-menu_cocktails ">
        <p className="app__specialMenu_menu_heading">Cocktails</p>
        <div className="app__specialMenu_menu_items">
          {data.cocktails.map((cocktails, index) => (
            <MenuItem
              title={cocktails.title + index}
              price={cocktails.price}
              tags={cocktails.tags}
            />
          ))}
        </div>
      </div>
    </div>
    <div style={{ marginTop: "15px" }}>
      <button className="custom__button" type="button" onClick={() => {}}>
        View More
      </button>
    </div>
  </div>
);

export default SpecialMenu;
