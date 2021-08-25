import React, { useState, useEffect } from "react";
import { helpFetch } from "../helper/helpFetch";
import EpisodeCard from "./EpisodeCard";

const EpisodesList = () => {
  const [data, setData] = useState([]);
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  useEffect(() => {
    setData([]);
    const fetchData = async (url) => {
      const res = await helpFetch(url);
      setData((data) => [...data, ...res.results]);
      res.info.next ? await fetchData(res.info.next) : setIsDataLoaded(true);
    };
    fetchData("https://rickandmortyapi.com/api/episode");
  }, []);

  const loadEpisodes = (season) => {
    const episdoes = [];
    data.map(
      (el) =>
        el.episode.includes(season) &&
        episdoes.push(<EpisodeCard key={el.id} episode={el} />)
    );
    return episdoes;
  };

  return (
    <section className="episode-list">
      <h1>EPISODES</h1>
      <h2>Season 1</h2>
      {isDataLoaded && loadEpisodes("S01")}
      <h2>Season 2</h2>
      {isDataLoaded && loadEpisodes("S02")}
      <h2>Season 3</h2>
      {isDataLoaded && loadEpisodes("S03")}
      <h2>Season 4</h2>
      {isDataLoaded && loadEpisodes("S04")}
    </section>
  );
};

export default EpisodesList;
