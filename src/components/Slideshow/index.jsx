import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

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
      <FontAwesomeIcon
        icon={faAngleLeft}
        size="4x"
        className="sld-arrow prev"
        onClick={prevImage}
      />
      <FontAwesomeIcon
        icon={faAngleRight}
        size="4x"
        className="sld-arrow next"
        onClick={nextImage}
      />
      <span>{`${index + 1}/${pictLength}`}</span>
    </div>
  );
}

export default Slideshow;
