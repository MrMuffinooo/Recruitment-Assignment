import logo from "../img/image.png";

function Title() {
  return (
    <div id="left-pane">
      <div className="text-wrapper">
        <h2 className="text-pre-title">
          Episodes of the <b>4th</b> season of the series
        </h2>
        <br />
        <h1 className="highlighted-title">Rick and Morty</h1>
      </div>
      <div id="img-wrapper">
        <img src={logo} id="logo" alt="Rick and Morty img" />
      </div>
    </div>
  );
}

export default Title;
