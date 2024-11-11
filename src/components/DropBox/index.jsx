import { useState } from "react";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function DropBox({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="drop-box">
      <div className="drop-title">
        <span>{title}</span>
        <FontAwesomeIcon
          icon={faChevronUp}
          onClick={() => setIsOpen(!isOpen)}
          className={isOpen ? "fa-spin" : ""}
        />
      </div>
      <div className={`drop-txt ${isOpen ? "is-open" : "is-closed"}`}>
        {Array.isArray(content) ? (
          <ul>
            {content.map((elem, index) => (
              <li key={index}>{elem}</li>
            ))}
          </ul>
        ) : (
          <span>{content}</span>
        )}
      </div>
    </div>
  );
}

export default DropBox;
