import React, { useState } from "react";
import CharGallery from "./components/CharGallery";
import EpisodesList from "./components/EpisodesList";
import Footer from "./components/Footer";
import Header from "./components/Header";

const App = () => {
  const [section, setSection] = useState("character");

  return (
    <div className="app">
      <Header setSection={setSection} />
      {section === "character" ? <CharGallery /> : <EpisodesList />}
      <Footer />
    </div>
  );
};

export default App;
