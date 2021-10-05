import PropTypes from "prop-types";
import CharacterCard from "./CharacterCard";
//import CharacterDetail from "./CharacterDetail";

const CharacterList = (props) => {
  /*Aquí filtro cada character*/
  //Filter me retorna un nuevo array con aquellos elementos cuyo nombre coincida con el texto de la búsqueda
  const filterCharacters = props.characters.filter((character) => {
    return character.name
      .toLowerCase()
      .includes(props.searchCharacter.toLowerCase());
  });
  if (filterCharacters.length === 0) {
    return (
      <p className="list_empty">
        No hay ningún personaje que coincida con la palabra{" "}
        {props.searchCharacter}
      </p>
    );
  }

  const bySpecie = filterCharacters.filter((character) => {
    return (
      props.searchSpecie === "All" || character.species === props.searchSpecie
    );
  });

  return (
    <ul className="list">
      {bySpecie.map((character) => {
        return <CharacterCard key={character.id} character={character} />;
      })}
    </ul>
  );
};
CharacterList.defaultProps = {
  characters: [],
};

CharacterList.propTypes = {
  characters: PropTypes.array,
  searchCharacter: PropTypes.string.isRequired,
};

export default CharacterList;
