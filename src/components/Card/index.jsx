import { useNavigate } from "react-router-dom";

function Card({ title, cover, id }) {
  const navigate = useNavigate();

  return (
    <li className="card">
      <img
        src={cover}
        alt={`${title} cover`}
        onClick={() => navigate(`accomodation/${id}`)}
      />
      <span>{title}</span>
    </li>
  );
}

export default Card;
