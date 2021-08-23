import React, { useState, useEffect } from "react";
import { helpFetch } from "../helper/helpFetch";
import CharCard from "./CharCard";
import CharModal from "./CharModal";

const CharGallery = ({ data }) => {
  const [charData, setCharData] = useState(null);
  const [charUrl, setCharUrl] = useState(null);
  const [modalOn, setModalOn] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const res = await helpFetch(charUrl);
      setCharData(res);
    };
    charUrl && fetchData();
  }, [charUrl]);

  return (
    <section className="char-gallery">
      <h1>CHARACTERS</h1>
      <div className="char-gallery-container">
        {data.map((el) => (
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
