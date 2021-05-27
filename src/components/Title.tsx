import logo from "../img/image.png";

function Title() {
  return (
    <div id="left-pane">
      <div className="text-wrapper">
        Episodes of the <b>4th</b> season of the series
        <br />
        <span className="highlighted-title">Rick and Morty</span>
      </div>
      <div id="img-wrapper">
        <img src={logo} id="logo" alt="Rick and Morty img" />
      </div>
    </div>
  );
}

export default Title;
