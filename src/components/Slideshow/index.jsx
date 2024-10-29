import { useState } from "react";
import arrow from "../../assets/arrow_slide.png";

function Slideshow({ pictures }) {
  const [index, setIndex] = useState(0);
  const [pictLength] = useState(pictures.length);

  function prevImage() {
    return index <= pictLength - 1 && index > 0
      ? setIndex(index - 1)
      : setIndex(pictLength - 1);
  }

  function nextImage() {
    return index < pictLength - 1 && index >= 0
      ? setIndex(index + 1)
      : setIndex(0);
  }

  return (
    <div className="slideshow">
      <img src={pictures[index]} alt="" />
      <img
        src={arrow}
        alt="flèche précédente"
        className="sld-arrow prev"
        onClick={() => prevImage()}
      />
      <img
        src={arrow}
        alt="flèche suivante"
        className="sld-arrow next"
        onClick={() => nextImage()}
      />
      <span>{`${index + 1}/${pictLength}`}</span>
    </div>
  );
}

export default Slideshow;
