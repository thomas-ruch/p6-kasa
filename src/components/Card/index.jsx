function Card({ title, cover }) {
  return (
    <li className="card">
      <img src={cover} alt={`${title} cover`} />
      <span>{title}</span>
    </li>
  );
}

export default Card;
