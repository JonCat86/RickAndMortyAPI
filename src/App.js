import React, { useState } from "react";
import CharGallery from "./components/CharGallery";
import EpisodesList from "./components/EpisodeList";
import Header from "./components/Header";

const App = () => {
  const [section, setSection] = useState("character");

  return (
    <div>
      <Header setSection={setSection} />
      {section === "character" ? (
        <CharGallery section={section} />
      ) : (
        <EpisodesList section={section} />
      )}
    </div>
  );
};

export default App;
