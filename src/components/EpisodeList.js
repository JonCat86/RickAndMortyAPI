import React, { useState, useEffect } from "react";
import EpisodeCard from "./EpisodeCard";

const EpisodesList = ({ section }) => {
  const [data, setData] = useState(null);
  const [loadedData, setLoadedData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`https://rickandmortyapi.com/api/${section}`);
      const json = await res.json();
      setData(json.results);
    };
    fetchData();
  }, [section]);

  useEffect(() => {
    setLoadedData(
      data &&
        data.map(
          (el) =>
            el.episode.charAt(2) === "1" && (
              <EpisodeCard key={el.id} episode={el} />
            )
        )
    );
  }, [data]);

  return (
    <section className="episode-list">
      <h1>EPISODES</h1>
      {loadedData}
    </section>
  );
};

export default EpisodesList;
