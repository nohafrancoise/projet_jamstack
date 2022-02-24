import seo from '../img/seo.svg'
import data from '../db/service'
import tech from '../img/technology.svg'
import support from '../img/support.svg'
import cloud from '../img/cloud.svg'

export default function Service() {
  return (
    <div className="service">
      <div className="titreAndsub">
        <h1 className="titre">{data.service.title}</h1>
        <p className="subtitle">{data.service.desc}</p>
      </div>
      <div className="service-card">
        <div className="card">
          <img src={seo} className="icons" alt={"marketing"} />
          <div className="service-titre">{data.service.title[0].id}</div>
          <div className="service-text">{data.service.desc[0].id}</div>
        </div>
        <div className="card">
          <img src={tech} className="icons" alt={"technologie"} />
          <div className="service-titre">{data.service.title[1].id}</div>
          <div className="service-text">{data.service.desc[1].id}</div>
        </div>
        <div className="card">
          <img src={cloud} className="icons" alt={"cloud"} />
          <div className="service-titre">{data.service.title[2].id}</div>
          <div className="service-text">{data.service.desc[2].id}</div>
        </div>
        <div className="card">
          <img src={support} className="icons" alt={"support"} />
          <div className="service-titre">{data.service.title[2].id}</div>
          <div className="service-text">{data.service.desc[2].id}</div>
        </div>
      </div>
    </div>
  );
}

