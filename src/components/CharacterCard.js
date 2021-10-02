const CharacterCard = (props) => {
  const character = props.character;
  return (
    <li key={character.id}>
      <img src={character.photo} alt={character.name} />
      <h4>{character.name}</h4>
      <p>{character.species}</p>
    </li>
  );
};

export default CharacterCard;
