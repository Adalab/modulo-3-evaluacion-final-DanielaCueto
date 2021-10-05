import image from "../images/Rick_and_Morty_logo.png";

const Header = () => {
  return (
    <header className="header">
      <img className="header_img" src={image} alt="Rick and Morty logo" />
    </header>
  );
};
export default Header;
