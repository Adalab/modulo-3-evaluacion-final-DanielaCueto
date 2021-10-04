//Pedir los results de la api facilitada
const ResultsFromApi = () => {
  //Llamo a la Api
  return fetch(
    "https://raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json"
  )
    .then((response) => response.json())
    .then((response) => {
      return response.results.map((character) => {
        return {
          name: character.name,
          species: character.species,
          photo: character.image,
          id: character.id,
          status: character.status,
          origin: character.origin.name,
          episodes: character.episode,
        };
      });
    });
};

export default ResultsFromApi;
