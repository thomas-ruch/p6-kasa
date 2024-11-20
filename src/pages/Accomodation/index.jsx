import { useParams, Navigate } from "react-router-dom";
import accomodations from "../../datas/accomodations.json";
import Slideshow from "../../components/Slideshow";
import DropBox from "../../components/DropBox";
import Rating from "../../components/Rating";
import Host from "../../components/Host";
import Tag from "../../components/Tag";

function Accomodation() {
  const { accId } = useParams();
  const ids = accomodations.map((elem) => elem.id);

  if (ids.includes(accId)) {
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
              <Host
                picture={currentAcc.host.picture}
                name={currentAcc.host.name}
              />
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
  } else {
    return <Navigate to="/error" />;
  }
}

export default Accomodation;
