import PropTypes from "prop-types";
const Filter = (props) => {
  return (
    <input
      className="formulary_input"
      type="text"
      name="name"
      placeholder="Introduce aquí el nombre de tu personaje"
      onChange={props.handleSearchBoxChange}
      value={props.searchCharacter}
    />
  );
};

Filter.defaultProps = {
  searchCharacter: "",
};

Filter.propTypes = {
  handleSearchBoxChange: PropTypes.func.isRequired,
  searchCharacter: PropTypes.string,
};

export default Filter;
