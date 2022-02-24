import logo from "../img/logo.png";
import "../App.css";
import data from "../db/head.json";
import banner from "../img/banner.png";

export default function Header() {
  return (
    <div>
      <div className="logo">
        <img src={logo} alt={"logo"} />
      </div>
      <div className="header">
        <div>
          <h1 className="headerTitle">{data.header.title}</h1>
          <p className="">{data.header.text}</p>
          <button className="button">{data.header.button.text}</button>
        </div>
        <div className="bannerHead">
          <img src={banner} alt={"banner"} />
        </div>
      </div>
    </div>
  );
}

