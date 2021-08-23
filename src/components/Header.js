const Header = ({ setSection, setData }) => {
  const handleClick = (section) => {
    setData(null);
    setSection(section);
  };

  return (
    <header>
      <ul>
        <li onClick={() => handleClick("character")}>Characters</li>
        <li onClick={() => handleClick("episode")}>Episodes</li>
      </ul>
    </header>
  );
};

export default Header;
