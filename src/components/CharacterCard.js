import { Link } from "react-router-dom";
const CharacterCard = (props) => {
  const character = props.character;
  return (
    <li className="list_card ">
      <Link to={`/character/${props.character.id}`}>
        <img src={character.photo} alt={character.name} className="list_img" />
        <h4 className="list_title">{character.name}</h4>
        <p className="list_text">{character.species}</p>
      </Link>
    </li>
  );
};

export default CharacterCard;
