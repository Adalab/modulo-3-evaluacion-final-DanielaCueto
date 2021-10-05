import "../styles/App.scss";
import { useState, useEffect } from "react";
import ResultsFromApi from "../services/ResultsFromApi";
import Filter from "./Filter";
import CharacterList from "./CharacterList";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import CharacterDetail from "./CharacterDetail";
import Header from "./Header";

function App() {
  //constantes de estado
  const [characters, setCharacters] = useState([]);
  const [searchCharacter, setSearchCharacter] = useState("");
  const [searchSpecie, setSearchSpecie] = useState("All");
  console.log(searchSpecie);
  //Función que recibe parametro id y devuelve un character que coincida con ese id.
  const getCharacter = (id) => {
    id = parseInt(id);
    const character = characters.find((character) => {
      return character.id === id;
    });
    //console.log(character);
    return character;
  };

  //Aquí se saca la variable para una variable de JS
  const routeData = useRouteMatch("/character/:characterId");
  const characterId = routeData !== null ? routeData.params.characterId : "";

  // uso id para obtener el objecto character
  const handleSearchBoxChange = (ev) => {
    ev.preventDefault();
    const inputValue = ev.target.value;
    setSearchCharacter(inputValue);
  };

  const handleSelectedSpecie = (ev) => {
    setSearchSpecie(ev.target.value);
  };

  useEffect(() => {
    ResultsFromApi().then((characters) => {
      setCharacters(characters);
    });
  }, []);

  return (
    <div className="App page">
      <Header></Header>
      <Switch>
        <Route exact path="/">
          <form
            className="formulary"
            onSubmit={(ev) => {
              ev.preventDefault();
            }}
          >
            <Filter
              handleSearchBoxChange={handleSearchBoxChange}
              searchCharacter={searchCharacter}
            />
            <select onChange={handleSelectedSpecie} value={searchSpecie}>
              <option value="All">All</option>
              <option value="Human">Human</option>
              <option value="Alien">Alien</option>
            </select>
          </form>

          <CharacterList
            characters={characters}
            searchCharacter={searchCharacter}
            searchSpecie={searchSpecie}
          />
        </Route>
        <Route path="/character/:characterId">
          <CharacterDetail character={getCharacter(characterId)} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
