import EpisodeCard from "./EpisodeCard";

const EpisodesList = ({ data }) => {
  return (
    <section className="episode-list">
      <h1>EPISODES</h1>
      {data.map(
        (el) =>
          el.episode.charAt(2) === "1" && (
            <EpisodeCard key={el.id} episode={el} />
          )
      )}
    </section>
  );
};

export default EpisodesList;
