import { useState } from "react";
import aboutList from "../../datas/aboutList.json";
import arrow from "../../assets/arrow_back.png";

function DropTxt() {
  const [openItems, setOpenItems] = useState(
    new Array(aboutList.length).fill(false)
  );

  function handleClick(index) {
    const updatedItems = [...openItems];
    updatedItems[index] = !updatedItems[index];
    setOpenItems(updatedItems);
  }

  return aboutList.map(({ title, content }, index) => (
    <div className="drop-box" key={index}>
      <div className="drop-title">
        <span>{title}</span>
        <img src={arrow} alt="flèche" onClick={() => handleClick(index)} />
      </div>
      <div className={`drop-txt ${openItems[index] ? "is-open" : "is-closed"}`}>
        {content}
      </div>
    </div>
  ));
}

export default DropTxt;
