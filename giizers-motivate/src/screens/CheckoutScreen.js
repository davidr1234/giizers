import MiScreen from "./MiScreen.js";
import "animate.css";
import "./CheckoutScreen.css";
import youwin from "../img/youwon.png";
import colafrosch from "../img/cola-froeschli.jpg";
import Item from "./stuff/Item.js";
import { useEffect } from "react";

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

export default function CheckoutScreen(props) {
  const numWon = getRandomInt(9) + 1;
  let message = "";
  if (numWon >= 7) {
    message =
      "Top! Als Überzeugungstäter bist Du bereits sehr nachhaltig unterwegs!";
  } else if (numWon >= 4) {
    message =
      "Du bist noch unentschlossen, wie wärs mit mehr nachhaltigen Produkten das nächste Mal?";
  } else {
    message =
      "Nachhaltigkeit liegt dir noch nicht so am Herzen - schau Dir unsere tollen Produkte an! Vielleicht liegt nächstes Mal mehr drin?";
  }

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
      {/* <div
        style={{ width: "100%", textAlign: "center", marginTop: 72 }}
        className="animate__animated animate__rubberBand"
      >
        <img style={{ width: "92%" }} src={youwin}></img>
      </div> */}

      <div
        style={{
          textAlign: "center",
          fontSize: "1.4rem",
          marginTop: 64,
        }}
        className="animate__animated animate__rubberBand"
      >
        {message}
        <div style={{ marginTop: 64 }}>Dein Öko-Score</div>
      </div>

      <div style={{ textAlign: "center", marginTop: 24 }}>
        <div class="point">
          <svg
            class="round"
            viewbox="0 0 140 140"
            width="140"
            height="140"
            data-percent="20"
            style={{ strokeDasharray: `${320 * (numWon / 10)} 999` }}
          >
            <circle cx="70" cy="70" r="50" />
          </svg>
          <div
            style={{
              fontSize: "1.2rem",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translateX(-50%) translateY(-50%)",
            }}
          >
            {numWon / 10}
          </div>
        </div>
      </div>

      <div
        style={{
          textAlign: "center",
          fontSize: "1.4rem",
          marginTop: 48,
          marginBottom: 48,
        }}
      >
        Du hast {numWon} von 10 Lose durch Deine nachhaltigen Einkäufe gewonnen!
      </div>

      {/* <Item item={{ title: "Eier", image: colafrosch, co2: 3, wohl: 4 }}></Item> */}
    </MiScreen>
  );
}
