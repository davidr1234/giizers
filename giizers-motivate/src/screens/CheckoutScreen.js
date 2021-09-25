import MiScreen from "./MiScreen.js";
import "animate.css";
import youwin from "../img/youwon.png";
import colafrosch from "../img/cola-froeschli.jpg";
import Item from "./stuff/Item.js";

export default function CheckoutScreen(props) {
  return (
    <MiScreen
      logo="TOP-RIGHT"
      btnMainText="Jetzt Spielen"
      onButtonClick={() => props.navigateTo("GAMBLE")}
    >
      <div
        style={{ width: "100%", textAlign: "center", marginTop: 72 }}
        className="animate__animated animate__rubberBand"
      >
        <img style={{ width: "92%" }} src={youwin}></img>
      </div>

      <div style={{ textAlign: "center", fontSize: "2rem", marginTop: 48, marginBottom: 48 }}>
        5/10 Lose gewonnen durch nachhaltige Einkäufe!
      </div>

      <Item item={{ title: "Eier", image: colafrosch, co2: 3, wohl: 4 }}></Item>

    </MiScreen>
  );
}
