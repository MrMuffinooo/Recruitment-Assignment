import logo from "../img/image.png";

function Title() {
  return (
    <div id="left-pane">
      Episodes of the <b>4th</b> season of the series
      <br />
      <span style={{ fontSize: "70px", color: "#00BDD4", fontWeight: "bold" }}>
        Rick and Morty
      </span>
      <br />
      <div id="img-wrapper">
        <img src={logo} id="logo" alt="Rick and Morty img" />
      </div>
    </div>
  );
}

export default Title;
