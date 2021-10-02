import "../styles/App.scss";
import { useState, useEffect } from "react";
import ResultsFromApi from "../services/ResultsFromApi";
//constantes de estado

function App() {
  const [characters, setCharacters] = useState([]);
  const [searchCharacter, setSearchCharacter] = useState("");

  const handleSearchBoxChange = (ev) => {
    const inputValue = ev.target.value;
    setSearchCharacter(inputValue);
  };

  useEffect(() => {
    ResultsFromApi().then((characters) => {
      //console.log(characters);
      setCharacters(characters);
    });
  }, []);

  return (
    <div className="App">
      <form>
        <input
          type="text"
          name="name"
          onChange={handleSearchBoxChange}
          value={searchCharacter}
        />
      </form>
      <ul>
        {/*Aquí filtro cada character*/}
        {characters
          .filter((character) => {
            /*filtro me retorna el nombre del caracter introducido en la caja de texto */
            return character.name
              .toLowerCase()
              .includes(searchCharacter.toLowerCase());
          })
          .map((character) => {
            return (
              <li key={character.id}>
                <img src={character.photo} alt={character.name} />
                <h4>{character.name}</h4>
                <p>{character.species}</p>
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default App;
