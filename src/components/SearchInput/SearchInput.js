import React from "react";

const SearchInput = ({ onClickSearch, onChangeSearchInput, value }) => (
  <>
    <input
      style={styles}
      type="text"
      placeholder="Search"
      value={value}
      onChange={(e) => onChangeSearchInput(e)}
    />
    <button onClick={(e) => onClickSearch(e)}>Search</button>
  </>
);

export default SearchInput;

const styles = {
  padding: 5,
};
