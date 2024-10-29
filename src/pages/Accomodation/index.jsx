import { useParams } from "react-router-dom";
import accomodations from "../../datas/accomodations.json";
import Slideshow from "../../components/Slideshow";

function Accomodation() {
  const { accId } = useParams();

  const currentAcc = accomodations.find((elem) => elem.id === accId);

  return (
    <div>
      <h1>Logement {accId}</h1>
      <section className="accomodations-slideshow">
        <Slideshow pictures={currentAcc.pictures} />
      </section>
    </div>
  );
}

export default Accomodation;
