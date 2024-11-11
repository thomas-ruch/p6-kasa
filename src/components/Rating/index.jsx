import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as fasStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as farStar } from "@fortawesome/free-regular-svg-icons";

function Rating({ rate }) {
  const range = [1, 2, 3, 4, 5];

  return (
    <div className="rating">
      {range.map((elem) =>
        elem <= Number(rate) ? (
          <FontAwesomeIcon key={elem.toString()} icon={fasStar} />
        ) : (
          <FontAwesomeIcon key={elem.toString()} icon={farStar} />
        )
      )}
    </div>
  );
}

export default Rating;
