import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CharacterDetail = (props) => {
  return (
    <section className="selected">
      <img
        className="selected_img"
        src={props.character.photo}
        alt={props.character.name}
      ></img>
      <div>
        <Link to="/" className="selected_back">
          {" "}
          &lt; Volver{" "}
        </Link>
        <h4 className="selected_title">{props.character.name}</h4>
        <ul className="selected_list">
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
    </section>
  );
};

CharacterDetail.defaultProps = {
  character: {
    name: "",
    photo: "",
    species: "",
    status: "",
    origin: "",
    episodes: [],
  },
};

CharacterDetail.propTypes = {
  character: PropTypes.object,
};

export default CharacterDetail;
