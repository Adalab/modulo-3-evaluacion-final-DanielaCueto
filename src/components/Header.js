import image from "../images/Rick_and_Morty_logo.png";

const Header = () => {
  return (
    <header className="header">
      <a>
        <img className="header_img" src={image} />
      </a>
    </header>
  );
};
export default Header;
