import "../styles/App.scss";
import { useState, useEffect } from "react";
import ResultsFromApi from "../services/ResultsFromApi";
import Filter from "./Filter";
import CharacterList from "./CharacterList";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import CharacterCard from "./CharacterCard";
import CharacterDetail from "./CharacterDetail";

function App() {
  //constantes de estado
  const [characters, setCharacters] = useState([]);
  const [searchCharacter, setSearchCharacter] = useState("");
  //Función que recibe parametro id y devuelve un character que tiene ese id.
  const getCharacter = (id) => {
    id = parseInt(id);
    const character = characters.find((character) => {
      return character.id === id;
    });
    console.log(character);
    return character;
  };
  //Aquí se saca la variable para una variable de js
  const routeData = useRouteMatch("/character/:characterId");
  const params = routeData.params;
  // uso id para obtener el objecto character

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
    <div className="App page">
      <Switch>
        <Route exact path="/">
          <form className="formulary">
            <Filter
              handleSearchBoxChange={handleSearchBoxChange}
              searchCharacter={searchCharacter}
            />
          </form>
          <CharacterList
            characters={characters}
            searchCharacter={searchCharacter}
          />
        </Route>
        <Route path="/character/:characterId">
          <CharacterDetail
            character={getCharacter(
              useRouteMatch("/character/:characterId").params.characterId
            )}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
