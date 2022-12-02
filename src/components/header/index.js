import { useContext } from "react";
import { DefaultContext } from "../../Contexts";

import { ReactComponent as StarWarsLogoSVG } from "../../assets/Avatar_The_Last_Airbender_logo.svg";
import { ReactComponent as IconSearchSVG } from "../../assets/icon-search.svg";
import { ReactComponent as FacebookLogoSVG } from "../../assets/facebook.svg";
import { ReactComponent as InstagramLogoSVG } from "../../assets/instagram.svg";
import { ReactComponent as TwitterLogoSVG } from "../../assets/twitter.svg";
import { ReactComponent as YoutubeLogoSVG } from "../../assets/youtube.svg";


//массив данных ссылок
const swLinks = [
  {
    url: "https://ru-ru.facebook.com/AvatarAang4/",
    name: "facebook_logo",
    component: <FacebookLogoSVG />,
  },
  {
    url: "https://www.instagram.com/starwars/",
    name: "instagram_logo",
    component: <InstagramLogoSVG />,
  },
  {
    url: "https://twitter.com/starwars",
    name: "twitter_logo",
    component: <TwitterLogoSVG />,
  },
  {
    url: "https://www.youtube.com/user/starwars",
    name: "youtube_logo",
    component: <YoutubeLogoSVG />,
  },
];

export const Header = () => {
  const { fan } = useContext(DefaultContext);

  return (
    <header>
      <div className="links-layout">
        {swLinks.map((link) => (
          <a
            key={link.name}
            className="link"
            href={link.url}
            target="_blank"
            alt={link.name}
            rel="noreferrer"
          >
            {link.component}
          </a>
        ))}
      </div>
      <StarWarsLogoSVG />
      <div className="search-layout">
        <IconSearchSVG className="search-icon" />
        <input placeholder="Search Avatar" type="text" />

        <div style={{ color: "black", paddingTop: "1rem" }}>
          Poisk: {fan}
        </div>
      </div>
    </header>
  );
};
