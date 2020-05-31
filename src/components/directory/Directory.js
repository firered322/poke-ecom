import React from "react";
import "./directory.scss";
import Menuitem from "../menu-item/Menuitem";

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          id: 1,
          name: "Kanto",
          img: "https://wallpapercave.com/wp/wp3177653.jpg",
        },
        {
          id: 2,
          name: "Johto",
          img:
            "https://pm1.narvii.com/5936/77c8c74ae1f3f8ad2f448fcffb7780b31da41a21_hq.jpg",
        },
        {
          id: 3,
          name: "Hoenn",
          img: "https://i.ytimg.com/vi/zmrs_g4f0Tg/maxresdefault.jpg",
        },
        {
          id: 4,
          name: "Sinnoh",
          img:
            "https://cdn.bulbagarden.net/upload/thumb/4/44/Dialga-Palkia-Giratina.png/1200px-Dialga-Palkia-Giratina.png",
        },
        {
          id: 5,
          name: "Unova",
          img:
            "https://pm1.narvii.com/6022/29ebf8f9237ca2c7c9fd7a0bd19f6fd34407de67_hq.jpg",
        },
      ],
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map((item) => (
          <Menuitem key={item.id} item={item} />
        ))}
      </div>
    );
  }
}

export default Directory;
