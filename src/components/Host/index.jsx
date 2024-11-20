function Host({ picture, name }) {
  return (
    <div className="host">
      <span>{name}</span>
      <img src={picture} alt="Portrait du propriétaire" />
    </div>
  );
}

export default Host;
