import MiScreen from "./MiScreen.js";
import "animate.css";
import leaf from "../img/leaves.png";

export default function StartAppScreen(props) {
  return (
    <MiScreen logo="MAIN" btnMainText="Start" onButtonClick={() => props.navigateTo('LIST')}>
      <div style={{ width: "100%", textAlign: "center", marginTop: 128 }} className="animate__animated animate__rubberBand">
        <img style={{ width: "42%" }} src={leaf}></img>
      </div>
    </MiScreen>
  );
}
