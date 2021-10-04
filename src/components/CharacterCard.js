const CharacterCard = (props) => {
  const character = props.character;
  return (
    <li key={character.id} className="list_card ">
      <img src={character.photo} alt={character.name} className="list_img" />
      <h4 className="list_title">{character.name}</h4>
      <p className="list_text">{character.species}</p>
    </li>
  );
};

export default CharacterCard;
