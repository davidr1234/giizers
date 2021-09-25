import MiScreen from "./MiScreen.js";
import "animate.css";
import youwin from "../img/youwon.png";

export default function ScanEndScreen(props) {
  const onEndClick = () => {
    props.appState.setNumLots(props.appState.numLots + 1);
    props.appState.navigateTo("LIST");
  };
  return (
    <MiScreen logo="TOP-RIGHT" btnMainText="Mega" onButtonClick={onEndClick}>
      <div
        style={{ width: "100%", textAlign: "center", marginTop: 128 }}
        className="animate__animated animate__rubberBand"
      >
        <img style={{ width: "92%" }} src={youwin}></img>
      </div>

      <div style={{ textAlign: "center", fontSize: "2rem", marginTop: 48 }}>
        1 Los gewonnen
      </div>
    </MiScreen>
  );
}
