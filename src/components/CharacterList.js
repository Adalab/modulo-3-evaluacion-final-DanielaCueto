import PropTypes from "prop-types";
import CharacterCard from "./CharacterCard";
//import CharacterDetail from "./CharacterDetail";

const CharacterList = (props) => {
  /*Aquí filtro cada character*/
  //Filter me retorna un nuevo array con aquellos elementos cuyo nombre coincida con el texto de la búsqueda
  console.log("--------", props.characters);
  let filterCharacters = props.characters.filter((character) => {
    return character.name
      .toLowerCase()
      .includes(props.searchCharacter.toLowerCase());
  });
  console.log(filterCharacters);
  if (filterCharacters.length === 0) {
    return (
      <p className="list_empty">
        No hay ningún personaje que coincida con la palabra{" "}
        {props.searchCharacter}
      </p>
    );
  }

  filterCharacters = filterCharacters.filter((character) => {
    return (
      props.searchSpecie === "All" || character.species === props.searchSpecie
    );
  });
  console.log(filterCharacters);
  filterCharacters = filterCharacters.filter((character) => {
    return (
      props.searchGender === "All" || character.gender === props.searchGender
    );
  });
  console.log(filterCharacters);
  filterCharacters.sort((a, b) => {
    if (a.name === b.name) {
      return 0;
    } else if (a.name > b.name) {
      return 1;
    } else {
      return -1;
    }
  });
  console.log(filterCharacters);
  return (
    <ul className="list">
      {filterCharacters.map((character) => {
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
