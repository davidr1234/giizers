import MiScreen from "./MiScreen.js";
import "animate.css";
import "./WinPrizeScreen.css";
import React from "react";
import colafrosch from "../img/cola-froeschli.jpg";
import geniusmix from "../img/you-genius-mix.jpg";
import focuswater from "../img/focus-vitamin-water-active.jpg";
import notwonanything from "../img/smiley-3058590_640.jpg";

export default function WinPrizeScreen(props) {
  const [winMessage, setWinMessage] = React.useState(
    '"Jetzt spielen" klicken!'
  );
  const [currentThing, setCurrentThing] = React.useState(0);
  const [showFireworks, setShowFireworks] = React.useState(false);

  const prizes = [
    { img: colafrosch, name: "Cola Fröschli", won: true },
    { img: geniusmix, name: "Genius Mix", won: true },
    { img: focuswater, name: "Focus Water", won: true },
    { img: notwonanything, name: "Nichts", won: false },
  ];

  const slowDown = (timeout, ct) => {
    if (timeout < Math.random() * 100 + 350) {
      setTimeout(() => {
        setCurrentThing((ct + 1) % prizes.length);
        slowDown(timeout * 1.2, ct + 1);
      }, timeout);
    } else {
      setWinMessage(`${prizes[ct % prizes.length].name} gewonnen!`);
      if (prizes[ct % prizes.length].won) {
        setShowFireworks(true);
        setTimeout(() => setShowFireworks(false), 2500);
      }
    }
  };

  const onPlayNowClick = () => {
    if (props.appState.numLots > 0) {
      slowDown(20, currentThing);
      props.appState.setNumLots(props.appState.numLots - 1);
    } else {
      props.appState.navigateTo("START");
    }
  };

  return (
    <MiScreen
      logo="TOP-RIGHT"
      btnMainText={props.appState.numLots > 0 ? "Jetzt spielen" : "Von vorne"}
      onButtonClick={onPlayNowClick}
    >
      {showFireworks && (
        <div class="pyro">
          <div class="before"></div>
          <div class="after"></div>
        </div>
      )}
      <div>
        <div
          style={{
            textAlign: "center",
            fontSize: "2rem",
            marginTop: 96,
            marginBottom: 48,
          }}
        >
          {winMessage}
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: 256,
              height: 256,
              borderRadius: 128,
              border: "1px dashed white",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                width: "76%",
                borderRadius: 500,
                backgroundColor: "white",
                margin: "0 auto",
                height: "76%",
                display: "flex",
                justifyContent: "center",
                overflow: "hidden",
              }}
            >
              <img src={prizes[currentThing].img}></img>
            </div>
          </div>
        </div>

        <div style={{ textAlign: "center", fontSize: "2rem", marginTop: 48 }}>
          {props.appState.numLots > 0 && (
            <span>Noch {props.appState.numLots} Lose</span>
          )}
          {props.appState.numLots <= 0 && <span>Keine Lose mehr!</span>}
        </div>
      </div>
    </MiScreen>
  );
}
