import img from "../assets/logo.png";
const Header = ({ setSection }) => {
  const handleClick = (section) => {
    setSection(section);
  };

  return (
    <header>
      <img className="header-img" src={img} alt="logo" />
      <ul>
        <li onClick={() => handleClick("character")}>Characters</li>
        <li onClick={() => handleClick("episode")}>Episodes</li>
      </ul>
    </header>
  );
};

export default Header;
