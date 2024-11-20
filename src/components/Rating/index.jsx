import activeStar from "../../assets/star-active.png";
import inactiveStar from "../../assets/star-inactive.png";

function Rating({ rate }) {
  const range = [1, 2, 3, 4, 5];

  return (
    <div className="rating">
      {range.map((elem) =>
        elem <= Number(rate) ? (
          <img key={elem.toString()} src={activeStar} alt="Etoile pleine" />
        ) : (
          <img key={elem.toString()} src={inactiveStar} alt="Etoile vide" />
        )
      )}
    </div>
  );
}

export default Rating;
