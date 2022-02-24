import logo from "../img/logo.png";
import data from "../db/footer.json";

function Footer() {
  return (
    <div className="">
      <div className="logo2">
        <img src={logo} alt={"logo"}/>
      </div>
      <div className="copyright">{data.footer.text}</div>
    </div>
  );
}

export default Footer;