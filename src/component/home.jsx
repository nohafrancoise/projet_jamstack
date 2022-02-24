import data from "../db/home.json";
import market from "../img/marketing-img.svg"

export default function Home() {
  return (
    <div className="headerHome">
      <div>
        <h1 className="homeTitle">{data.home.title}</h1>
        <p className="homeSubtitle">{data.home.desc}</p>
        <div className="id">
          <div className="id">
            <p className="para">{data.home.infos[0].text}</p>
          </div>
          <div className="id">
            <p className="para">{data.home.infos[1].text}</p>
          </div>
          <div className="id">
            <p className="para">{data.home.infos[2].text}</p>
          </div>
        </div>
      </div>
      <div className="market">
        <img src={market} alt={"market"} />
      </div>
    </div>
  );
}

