import React, { useState } from "react";
import SearchInput from "../components/SearchInput/SearchInput";
import axios from "axios";
// import SearchResults from "../components/SearchResults/SearchResults";

const SearchBar = ({ sendData }) => {
  const [searchItem, setSearchItem] = useState("");
  //   const [searchResults, setSearchResults] = useState();

  const onChangeSearchInputHandler = (e) => {
    setSearchItem(e.target.value);
  };
  const onClickSearchHandler = () => {
    axios
      .get(`https://imdb8.p.rapidapi.com/title/auto-complete?q=${searchItem}`, {
        headers: {
          "x-rapidapi-host": "imdb8.p.rapidapi.com",
          "x-rapidapi-key": process.env.REACT_APP_RAPIDAPI_API_KEY,
        },
      })
      .then((results) => sendData(results.data.d))
      .catch((e) => console.log(e));
  };
  return (
    <div style={styles}>
      <SearchInput
        value={searchItem}
        onChangeSearchInput={onChangeSearchInputHandler}
        onClickSearch={onClickSearchHandler}
      />
    </div>
  );
};

export default SearchBar;

const styles = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: 5,
  height: 200,
  width: "100%",
};
