import MiScreen from "./MiScreen.js";
import "animate.css";
import youwin from "../img/youwon.png";
import colafrosch from "../img/cola-froeschli.jpg";
import Item from "./stuff/Item.js";

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

export default function CheckoutScreen(props) {
  const numWon = getRandomInt(10);
  const onGambleClick = () => {
    props.appState.setNumLots(props.appState.numLots + numWon);
    props.appState.navigateTo("GAMBLE");
  };
  return (
    <MiScreen
      logo="TOP-RIGHT"
      btnMainText="Jetzt Lose einlösen"
      onButtonClick={onGambleClick}
    >
      <div
        style={{ width: "100%", textAlign: "center", marginTop: 72 }}
        className="animate__animated animate__rubberBand"
      >
        <img style={{ width: "92%" }} src={youwin}></img>
      </div>

      <div
        style={{
          textAlign: "center",
          fontSize: "2rem",
          marginTop: 48,
          marginBottom: 48,
        }}
      >
        {numWon}/10 Lose durch nachhaltige Einkäufe gewonnen!
      </div>

      {/* <Item item={{ title: "Eier", image: colafrosch, co2: 3, wohl: 4 }}></Item> */}
    </MiScreen>
  );
}
