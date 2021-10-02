const Filter = (props) => {
  return (
    <input
      type="text"
      name="name"
      onChange={props.handleSearchBoxChange}
      value={props.searchCharacter}
    />
  );
};

export default Filter;
