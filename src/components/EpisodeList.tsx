import Episode from "./Episode";
import { useQuery, gql } from "@apollo/client";

interface Episode {
  episode: String;
  name: String;
  air_date: String;
}

function EpisodeList() {
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

  const { loading, error, data, networkStatus } = useQuery(EPISODES, {
    notifyOnNetworkStatusChange: true,
  });

  //console.log(networkStatus);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  return (
    <ul className="episodes-wrapper">
      {data.episodes.results.map((ep: Episode) => (
        <Episode no={ep.episode} title={ep.name} air={ep.air_date} />
      ))}
    </ul>
  );
}

export default EpisodeList;
