const EpisodeCard = ({ episode }) => {
  return (
    <div className="episode-card">
      <p>{episode.episode}</p>
      <p>{episode.name}</p>
      <p>{episode.air_date}</p>
    </div>
  );
};

export default EpisodeCard;
