import Card from "../Card";
import accomodations from "../../datas/accomodations.json";

function Gallery() {
  return (
    <ul className="gallery">
      {accomodations.map(({ id, title, cover }) => (
        <div key={id}>
          <Card title={title} cover={cover} />
        </div>
      ))}
    </ul>
  );
}

export default Gallery;
