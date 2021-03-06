import Episode from "./Episode";
import { useQuery, gql } from "@apollo/client";

function EpisodeList() {
  interface Episode {
    episode: string;
    name: String;
    air_date: String;
  }

  const EPISODES = gql`
    {
      episodes(filter: { episode: "S04" }) {
        results {
          episode
          name
          air_date
        }
      }
    }
  `;

  const { loading, error, data } = useQuery(EPISODES, {
    notifyOnNetworkStatusChange: true,
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  return (
    <ul className="episodes-wrapper">
      {data.episodes.results.map((ep: Episode) => (
        <Episode
          no={ep.episode}
          title={ep.name}
          air={ep.air_date}
          key={ep.episode}
        />
      ))}
    </ul>
  );
}

export default EpisodeList;
