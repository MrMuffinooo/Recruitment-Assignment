import "../css/Episode.css";

interface EpisodeInfo {
  no: String;
  title: String;
  air: String;
}

function Episode({ no, title, air }: EpisodeInfo) {
  return (
    <li className="episode" key={no.toString()}>
      <div className="episode-no">{no}</div>
      <div className="episode-details">
        <div className="episode-title">{title}</div>
        <div className="episode-date">{air}</div>
      </div>
    </li>
  );
}

export default Episode;
