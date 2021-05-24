import "../css/App.css";
import EpisodeList from "./EpisodeList";
import Footer from "./Footer";
import Header from "./Header";
import Title from "./Title";

function App() {
  return (
    <div className="App">
      <Header />
      <article>
        <Title />
        <EpisodeList />
      </article>
      <Footer/>
    </div>
  );
}

export default App;
