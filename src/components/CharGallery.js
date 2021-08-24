import React, { useState, useEffect } from "react";
import { helpFetch } from "../helper/helpFetch";
import CharCard from "./CharCard";
import CharModal from "./CharModal";
import Searcher from "./Searcher";

const CharGallery = ({ section }) => {
  const [charData, setCharData] = useState(null);
  const [charUrl, setCharUrl] = useState(null);
  const [modalOn, setModalOn] = useState("");
  const [data, setData] = useState(null);
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState("");

  // fetch for Modal
  useEffect(() => {
    const fetchChar = async () => {
      const res = await fetch(charUrl);
      const json = await res.json();
      setCharData(json);
    };
    charUrl && fetchChar();
  }, [charUrl]);

  // main fetch
  useEffect(() => {
    const fetchData = async () => {
      const res = await helpFetch(section, page, filter);
      setData(res);
    };
    fetchData();
  }, [section, page, filter]);

  // search
  const handleSearch = (search) => {
    setPage(1);
    setFilter(search.toLowerCase());
  };

  return (
    <section className="char-gallery">
      <h1>CHARACTERS</h1>
      <Searcher handleSearch={handleSearch} />
      <div className="char-gallery-container">
        {data &&
          data.map((el) => (
            <CharCard
              key={el.id}
              char={el}
              setCharUrl={setCharUrl}
              setModalOn={setModalOn}
            />
          ))}
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

/* {data &&
          data.map((el) => (
            <CharCard
              key={el.id}
              char={el}
              setCharUrl={setCharUrl}
              setModalOn={setModalOn}
            />
          ))} */
