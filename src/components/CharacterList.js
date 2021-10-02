import CharacterCard from "./CharacterCard";

const CharacterList = (props) => {
  return (
    <ul>
      {/*Aquí filtro cada character*/}
      {props.characters
        .filter((character) => {
          /*filtro me retorna el nombre del caracter introducido en la caja de texto */
          return character.name
            .toLowerCase()
            .includes(props.searchCharacter.toLowerCase());
        })
        .map((character) => {
          return <CharacterCard character={character} />;
        })}
    </ul>
  );
};

export default CharacterList;
