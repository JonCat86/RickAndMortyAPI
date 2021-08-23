import React, { useState, useEffect } from "react";
import CharGallery from "./components/CharGallery";
import EpisodesList from "./components/EpisodeList";
import Header from "./components/Header";
import { helpFetch } from "./helper/helpFetch";

const App = () => {
  // states
  const [section, setSection] = useState("character");
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await helpFetch(`https://rickandmortyapi.com/api/${section}`);
      const results = res.results;
      setData(results);
    };
    fetchData();
  }, [section]);

  return (
    <div>
      <Header setSection={setSection} setData={setData} />
      {data &&
        (section === "character" ? (
          <CharGallery data={data} />
        ) : (
          <EpisodesList data={data} />
        ))}
    </div>
  );
};

export default App;
