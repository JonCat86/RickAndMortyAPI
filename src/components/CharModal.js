const CharModal = ({ char, modalOn, setModalOn, setCharData, setCharUrl }) => {
  const handleClick = () => {
    setModalOn("");
    setCharData(null);
    setCharUrl(null);
  };

  return (
    <div className={`char-modal ${modalOn}`} onClick={handleClick}>
      <div className="char-modal-box">
        <img className="char-modal-img" src={char.image} alt={char.name} />
        <div className="char-modal-info">
          <h2>{char.name}</h2>
          <table>
            <tbody>
              <tr>
                <th>Gender: </th>
                <td>{char.gender}</td>
              </tr>
              <tr>
                <th>Origin: </th>
                <td>{char.origin.name}</td>
              </tr>
              <tr>
                <th>Species: </th>
                <td>{char.species}</td>
              </tr>
              <tr>
                <th>Status: </th>
                <td>{char.status}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CharModal;
