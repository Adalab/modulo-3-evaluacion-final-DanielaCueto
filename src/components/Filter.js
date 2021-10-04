const Filter = (props) => {
  return (
    <input
      className="formulary_input"
      type="text"
      name="name"
      onChange={props.handleSearchBoxChange}
      value={props.searchCharacter}
    />
  );
};

export default Filter;
