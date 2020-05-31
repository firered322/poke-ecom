import React from "react";
import "./directory.scss";
import Menuitem from "../menu-item/Menuitem";

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        { id: 1, name: "Gen 1", img: "./assets/gen1.jpeg" },
        { id: 2, name: "Gen 2", img: "./assets/gen2.jpg" },
        { id: 3, name: "Gen 3", img: "./assets/gen3.jpg" },
        { id: 4, name: "Gen 4", img: "./assets/gen4.jpg" },
        { id: 5, name: "Gen 5", img: "./assets/gen5.jpg" },
      ],
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map((item) => (
          <Menuitem name={item.name} />
        ))}
      </div>
    );
  }
}

export default Directory;
