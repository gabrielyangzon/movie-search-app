import React from "react";
import SearchResult from "./SearchResult";

const SearchResults = ({ data }) => {
  console.log(data);
  let component = data
    ? data.map((item) => (
        <SearchResult
          key={item.id}
          id={item.id}
          url={item.i.imageUrl}
          name={item.l}
        />
      ))
    : null;

  return <div style={styles}>{component}</div>;
};

export default SearchResults;

const styles = {
  padding: 20,
  display: "flex",
  alignItems: "center",
  flexWrap: "wrap",
  justifyContent: "space-around",
};
