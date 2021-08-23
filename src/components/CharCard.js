const CharCard = ({ char, setCharUrl, setModalOn }) => {
  const handleClick = () => {
    setCharUrl(char.url);
    setModalOn("modal-open");
  };
  return (
    <div className="char-card" onClick={handleClick}>
      <div className="char-img-container">
        <img className="char-img" src={char.image} alt={char.name} />
      </div>
      <h2>{char.name}</h2>
    </div>
  );
};

export default CharCard;
