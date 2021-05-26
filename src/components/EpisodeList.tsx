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

  if (loading)
    return (
      <div id="right-pane">
        <p>Loading...</p>
      </div>
    );
  if (error)
    return (
      <div id="right-pane">
        <p>Error</p>
      </div>
    );

  return (
    <div id="right-pane">
      {data.episodes.results.map((ep: Episode) => (
        <Episode no={ep.episode} title={ep.name} air={ep.air_date} />
      ))}
    </div>
  );
}

export default EpisodeList;
