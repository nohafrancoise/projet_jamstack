import logo from "../img/logo.png";
import "../App.css";
import data from "../data/header.json";
import banner from "../img/banner.png";

function Header() {
  return (
    <div>
      <div className="logo">
        <img src={logo} alt={"logo"} />
      </div>
      <div className="header">
        <div>
          <h1 className="headerTitle">{data.header.title}</h1>
          <p className="desc">{data.header.text}</p>
          <button className="button">{data.header.button}</button>
        </div>
        <div className="bannerHead">
          <img src={banner} alt={"banner"} />
        </div>
      </div>
    </div>
  );
}

export default Header;