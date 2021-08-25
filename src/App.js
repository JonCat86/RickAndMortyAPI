import React, { useState } from "react";
import CharGallery from "./components/CharGallery";
import EpisodesList from "./components/EpisodesList";
import Header from "./components/Header";

const App = () => {
  const [section, setSection] = useState("character");

  return (
    <div>
      <Header setSection={setSection} />
      {section === "character" ? <CharGallery /> : <EpisodesList />}
    </div>
  );
};

export default App;
