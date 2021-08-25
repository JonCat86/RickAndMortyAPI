import React, { useState, useEffect } from "react";
import { helpFetch } from "../helper/helpFetch";
import CharCard from "./CharCard";
import CharModal from "./CharModal";
import Searcher from "./Searcher";
import rickandmortyportal from "../assets/rickandmortyportal.png";

const CharGallery = () => {
  const [charData, setCharData] = useState(null);
  const [charUrl, setCharUrl] = useState(null);
  const [modalOn, setModalOn] = useState("");
  const [data, setData] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  // fetch for Modal
  useEffect(() => {
    const fetchChar = async () => {
      const fetchData = await helpFetch(charUrl);
      setCharData(fetchData);
    };
    charUrl && fetchChar();
  }, [charUrl]);

  // main fetch
  useEffect(() => {
    const fetchData = async () => {
      const res = await helpFetch("https://rickandmortyapi.com/api/character");
      setData(res.results);
      setIsLoaded(true);
    };
    fetchData();
  }, []);

  // search
  const handleSearch = (search) => {
    setIsLoaded(false);
    setData([]);
    const searchFetch = async (url) => {
      const res = await helpFetch(url);
      !res.error ? setData((data) => [...data, ...res.results]) : setData([]);
      if (!res.error && res.info.next) searchFetch(res.info.next);
      else setIsLoaded(true);
    };
    const fetchData = async () => {
      const res = await helpFetch("https://rickandmortyapi.com/api/character");
      setData(res.results);
      setIsLoaded(true);
    };
    search === ""
      ? fetchData()
      : searchFetch(
          `https://rickandmortyapi.com/api/character/?name=${search}`
        );
  };

  // more btn

  return (
    <section className="char-gallery">
      <h1>CHARACTERS</h1>
      <Searcher handleSearch={handleSearch} />
      <div className="char-gallery-container">
        {isLoaded &&
          data.map((el) => (
            <CharCard
              key={el.id}
              char={el}
              setCharUrl={setCharUrl}
              setModalOn={setModalOn}
            />
          ))}
        {(!isLoaded || data.length === 0) && (
          <img className="portal" src={rickandmortyportal} alt="portal" />
        )}
      </div>
      {charData && (
        <CharModal
          char={charData}
          modalOn={modalOn}
          setModalOn={setModalOn}
          setCharData={setCharData}
          setCharUrl={setCharUrl}
        />
      )}
    </section>
  );
};

export default CharGallery;
