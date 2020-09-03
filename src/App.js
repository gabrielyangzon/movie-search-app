import React, { useState } from "react";
import "./App.css";

import NavBar from "./components/NavigationBar/NavBar";
import SearchBar from "./containers/SearchBar";

import SearchResults from "./components/SearchResults/SearchResults";

function App() {
  const [data, setData] = useState();

  return (
    <div className="App">
      <NavBar />
      <SearchBar sendData={setData} />

      <SearchResults data={data} />
    </div>
  );
}

export default App;
