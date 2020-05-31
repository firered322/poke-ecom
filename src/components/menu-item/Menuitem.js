import React from "react";
import "./menuitem.scss";

const Menuitem = (props) => (
  <div className="menu-item">
    <div className="content">
      <div className="title">{props.name}</div>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);

export default Menuitem;
