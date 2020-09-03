import React from "react";

const SearchResult = ({ id, name, url }) => (
  <div style={styles} key={id}>
    {name}
    <p>
      <img src={url} alt="no-img" width="150" height="300" />
    </p>
  </div>
);

const styles = {
  padding: 10,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: 350,
  width: 175,
  margin: 5,
  boxShadow: " 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
};

export default SearchResult;
