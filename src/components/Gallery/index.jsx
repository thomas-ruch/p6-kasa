import Card from "../Card";
import accomodations from "../../datas/accomodations.json";

function Gallery() {
  return (
    <ul className="gallery">
      {accomodations.map(({ id, title, cover }) => (
        <Card key={id} id={id} title={title} cover={cover} />
      ))}
    </ul>
  );
}

export default Gallery;
