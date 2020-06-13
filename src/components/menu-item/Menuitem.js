import React from "react";
import "./menuitem.scss";
import { withRouter } from "react-router-dom";

const Menuitem = (props) => (
  <div className="menu-item">
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${props.item.img})`,
      }}
    />
    <div className="content">
      <div className="title">{props.item.name.toUpperCase()}</div>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);

export default withRouter(Menuitem);
