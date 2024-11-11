import { Link } from "react-router-dom";

function Card({ title, cover, id }) {
  return (
    <li className="card">
      <Link to={`/accomodation/${id}`}>
        <img src={cover} alt={`${title} cover`} />
        <span>{title}</span>
      </Link>
    </li>
  );
}

export default Card;
