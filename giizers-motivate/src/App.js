import React from "react";
import "./App.css";
import StartAppScreen from "./screens/StartAppScreen";
import ListScreen from "./screens/ListScreen";
import ScanScreen from "./screens/ScanScreen";
import ScanEndScreen from "./screens/ScanEndScreen";
import CheckoutScreen from "./screens/CheckoutScreen";
import WinPrizeScreen from "./screens/WinPrizeScreen";

function App() {
  const [screen, setScreen] = React.useState("START");

  const navigateTo = (where) => {
    setScreen(where);
  };
  
  return (
    <div className="App">
      {screen == "START" && (
        <StartAppScreen navigateTo={navigateTo}></StartAppScreen>
      )}
      {screen == "LIST" && <ListScreen navigateTo={navigateTo}></ListScreen>}
      {screen == "SCAN" && <ScanScreen navigateTo={navigateTo}></ScanScreen>}
      {screen == "SCAN-END" && (
        <ScanEndScreen navigateTo={navigateTo}></ScanEndScreen>
      )}
      {screen == "CHECKOUT" && (
        <CheckoutScreen navigateTo={navigateTo}></CheckoutScreen>
      )}
      {screen == "GAMBLE" && (
        <WinPrizeScreen navigateTo={navigateTo}></WinPrizeScreen>
      )}
    </div>
  );
}

export default App;
