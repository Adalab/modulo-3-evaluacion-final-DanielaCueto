const CharacterDetail = (props) => {
  if (props.character) {
    return (
      <div>
        <img src={props.character.photo}></img>
        <h4>{props.character.name}</h4>
        <ul>
          <li>
            <strong>Specie: </strong>
            {props.character.species}
          </li>
          <li>
            <strong>Origin planet: </strong>
            {props.character.origin}
          </li>
          <li>
            <strong># Episodes: </strong>
            {props.character.episodes.length}
          </li>
          <li>
            <strong>Status: </strong>
            {props.character.status}
          </li>
        </ul>
      </div>
    );
  } else {
    return <></>;
  }
};

export default CharacterDetail;
