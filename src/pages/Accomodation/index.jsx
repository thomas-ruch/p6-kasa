import { useParams } from "react-router-dom";
import accomodations from "../../datas/accomodations.json";
import Slideshow from "../../components/Slideshow";
import DropBox from "../../components/DropBox";
import Rating from "../../components/Rating";
import Tag from "../../components/Tag";

function Accomodation() {
  const { accId } = useParams();

  const currentAcc = accomodations.find((elem) => elem.id === accId);

  return (
    <div>
      <section className="accomodation-slideshow">
        <Slideshow pictures={currentAcc.pictures} />
      </section>
      <section>
        <div className="accomodation-infos">
          <div className="accomodation-title">
            <h2>{currentAcc.title}</h2>
            <span>{currentAcc.location}</span>
            <div>
              {currentAcc.tags.map((elem, index) => (
                <Tag key={index} tag={elem} />
              ))}
            </div>
          </div>
          <div className="accomodation-rating">
            <div className="accomodation-host">
              <span>{currentAcc.host.name}</span>
              <img src={currentAcc.host.picture} alt="icone du propriétaire" />
            </div>
            <Rating rate={currentAcc.rating} />
          </div>
        </div>
        <div className="accomodation-description">
          <DropBox title="Description" content={currentAcc.description} />
          <DropBox title="Équipements" content={currentAcc.equipments} />
        </div>
      </section>
    </div>
  );
}

export default Accomodation;
