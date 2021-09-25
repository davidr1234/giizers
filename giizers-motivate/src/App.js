import React from "react";
import colafrosch from "./img/cola-froeschli.jpg";
import "./App.css";
import CheckoutScreen from "./screens/CheckoutScreen";
import ListScreen from "./screens/ListScreen";
import ScanEndScreen from "./screens/ScanEndScreen";
import ScanScreen from "./screens/ScanScreen";
import StartAppScreen from "./screens/StartAppScreen";
import WinPrizeScreen from "./screens/WinPrizeScreen";

function App() {
  const [screen, setScreen] = React.useState("START");
  const [products, setProducts] = React.useState([
    // { title: "Eier", image: colafrosch, co2: 3, wohl: 4 },
    // { title: "Cola", image: colafrosch, co2: 2, wohl: 5 },
    // { title: "Wasser", image: colafrosch, co2: 5, wohl: 4 },
  ]);
  const [numLots, setNumLots] = React.useState(0);

  const navigateTo = (where) => {
    setScreen(where);
  };

  const appState = {
    navigateTo: navigateTo,
    products: products,
    setProducts: setProducts,
    numLots: numLots,
    setNumLots: setNumLots,
  };

  return (
    <div className="App">
      {screen == "START" && (
        <StartAppScreen appState={appState}></StartAppScreen>
      )}
      {screen == "LIST" && <ListScreen appState={appState}></ListScreen>}
      {screen == "SCAN" && <ScanScreen appState={appState}></ScanScreen>}
      {screen == "SCAN-END" && (
        <ScanEndScreen appState={appState}></ScanEndScreen>
      )}
      {screen == "CHECKOUT" && (
        <CheckoutScreen appState={appState}></CheckoutScreen>
      )}
      {screen == "GAMBLE" && (
        <WinPrizeScreen appState={appState}></WinPrizeScreen>
      )}
    </div>
  );
}

export default App;
