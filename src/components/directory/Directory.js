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
          img: "https://i.ytimg.com/vi/SkBBV8UtXrA/hqdefault.jpg",
        },
        {
          id: 6,
          name: "Kalos",
          img:
            "https://images-na.ssl-images-amazon.com/images/I/61Wfnhorc1L._AC_SX466_.jpg",
        },
        {
          id: 7,
          name: "Alola",
          img:
            "https://cdn.gamer-network.net/2017/usgamer/ultra-sun-and-moon-necrozmas.jpg",
        },
        {
          id: 8,
          name: "Galar",
          img:
            "https://i.pinimg.com/originals/f8/3d/00/f83d0015f37346cba0610f39b6c143db.jpg",
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
