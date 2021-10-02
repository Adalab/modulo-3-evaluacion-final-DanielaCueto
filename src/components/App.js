import "../styles/App.scss";
import { useState, useEffect } from "react";
import ResultsFromApi from "../services/ResultsFromApi";
import Filter from "./Filter";
import CharacterList from "./CharacterList";

function App() {
  //constantes de estado
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
        <Filter
          handleSearchBoxChange={handleSearchBoxChange}
          searchCharacter={searchCharacter}
        />
      </form>
      <CharacterList
        characters={characters}
        searchCharacter={searchCharacter}
      />
    </div>
  );
}

export default App;
