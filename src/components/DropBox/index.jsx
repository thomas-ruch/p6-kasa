import { useState } from "react";
import arrow from "../../assets/arrow_back.png";

function DropBox({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="drop-box">
      <div className="drop-title">
        <span>{title}</span>
        <img
          src={arrow}
          alt="flèche"
          className={isOpen ? "rotated" : ""}
          onClick={() => setIsOpen(!isOpen)}
        />
      </div>
      <div className={`drop-txt ${isOpen ? "is-open" : "is-closed"}`}>
        {content}
      </div>
    </div>
  );
}

export default DropBox;
