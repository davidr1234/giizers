import MiScreen from "./MiScreen.js";
import "animate.css";
import youwin from "../img/youwon.png";

export default function ScanEndScreen(props) {
  return (
    <MiScreen
      logo="TOP-RIGHT"
      btnMainText="Awesome"
      onButtonClick={() => props.navigateTo("LIST")}
    >
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
