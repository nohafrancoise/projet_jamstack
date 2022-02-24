import data from "../data/home.json";
import market from "../img/marketing-img.svg"

function Home() {
  return (
    <div className="headerHome">
      <div>
        <h1 className="homeTitle">{data.home.title}</h1>
        <p className="homeSubtitle">{data.home.desc}</p>
        <div className="id">
          <div className="id">
            <p className="para">{data.home.id0}</p>
          </div>
          <div className="id">
            <p className="para">{data.home.id1}</p>
          </div>
          <div className="id">
            <p className="para">{data.home.id2}</p>
          </div>
        </div>
      </div>
      <div className="market">
        <img src={market} alt={"market"} />
      </div>
    </div>
  );
}

export default Home;