import "../styles/App.scss";
import { useState, useEffect } from "react";
import ResultsFromApi from "../services/ResultsFromApi";
//constantes de estado

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    ResultsFromApi().then((characters) => {
      //console.log(characters);
      setCharacters(characters);
    });
  }, []);

  return (
    <div className="App">
      <ul style={{ listStyle: "none" }}>
        {characters.map((character) => {
          return (
            <li>
              <img src={character.photo} />
              <p>{character.name}</p>
              <p>{character.species}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
